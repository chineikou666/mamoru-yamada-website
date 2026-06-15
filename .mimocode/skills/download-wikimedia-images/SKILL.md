---
name: download-wikimedia-images
description: Download images from Wikimedia Commons to local directory for Next.js projects
---

# Download Wikimedia Commons Images

Download images from Wikimedia Commons to a local `/public/images/` directory for use in Next.js projects.

## When to Use

- User requests local images instead of remote URLs
- Building detail pages need real architectural photos
- Wikimedia Commons provides CC BY-SA 4.0 images for Japanese architecture

## Workflow

### 1. Search for Images

Use the Wikimedia API to find images:

```python
import urllib.request, urllib.parse, json

def search_commons(query, limit=3):
    params = {
        'action': 'query',
        'list': 'search',
        'srsearch': query,
        'srnamespace': '6',  # File namespace
        'srlimit': limit,
        'format': 'json'
    }
    url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read())['query']['search']
```

### 2. Get Image URL

Extract the actual image URL from the search result:

```python
def get_image_url(title):
    params = {
        'action': 'query',
        'titles': title,
        'prop': 'imageinfo',
        'iiprop': 'url|size',
        'iiurlwidth': '1200',  # Resize to 1200px width
        'format': 'json'
    }
    url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        pages = json.loads(resp.read())['query']['pages']
        for page in pages.values():
            if 'imageinfo' in page:
                return page['imageinfo'][0].get('thumburl', page['imageinfo'][0]['url'])
    return None
```

### 3. Download Image

```python
def download_image(url, filepath):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        with open(filepath, 'wb') as f:
            f.write(resp.read())
```

### 4. Update Building Data

Update `src/lib/data/buildings.ts` to reference the local image:

```typescript
{
  id: 1,
  // ... other fields
  image: '/images/buildings/kyoto-tower.jpg',
}
```

## Notes

- Wikimedia Commons blocks direct `curl` downloads (returns 400)
- Use Python with `urllib` and proper `User-Agent` header
- Resize images to 1200px width for web use
- Store images in `/public/images/buildings/`
- Always verify the image license (CC BY-SA 4.0 for most Japanese architecture)
