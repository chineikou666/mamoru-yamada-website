# Netlify CMS Setup Guide

This project uses Netlify CMS for content management. This guide explains how to configure and use the CMS.

## Overview

Netlify CMS provides a user-friendly admin interface for managing website content. The CMS is configured with:

- **Git Gateway**: For authentication via Netlify Identity
- **Editorial Workflow**: For draft/review/publish workflow
- **I18n Support**: For Japanese and English content
- **Multiple Collections**: Buildings, Research Logs, About, Team Members, and Settings

## Content Structure

```
content/
├── buildings/           # 建築作品 (Architecture works)
│   ├── {slug}-ja.yml   # Japanese version
│   └── {slug}-en.yml   # English version
├── research-logs/       # 研究日誌 (Research logs)
│   ├── {slug}-ja.yml
│   └── {slug}-en.yml
├── about/               # 概要 (About page)
│   ├── about-ja.yml
│   └── about-en.yml
├── team/                # チームメンバー (Team members)
│   ├── {slug}-ja.yml
│   └── {slug}-en.yml
└── settings/            # サイト設定 (Site settings)
    └── general.yml
```

## Configuration

### 1. Netlify Identity Setup

1. Go to your Netlify dashboard
2. Navigate to **Site settings > Identity**
3. Enable Identity
4. Under **Registration**, select "Open" or "Invite only"
5. Under **Git Gateway**, click "Enable Git Gateway"

### 2. Git Gateway Configuration

The `config.yml` file is located at `public/admin/config.yml`. Key settings:

```yaml
backend:
  name: git-gateway
  branch: main
```

### 3. Environment Variables

If using a custom Git Gateway or OAuth provider, set these in Netlify:

- `GIT_GATEWAY_ENDPOINT`: Custom Git Gateway endpoint (optional)

## Accessing the CMS

1. Navigate to `/admin` on your deployed site
2. Log in with your Netlify Identity credentials
3. You'll see the CMS dashboard with all collections

## Collections

### Buildings (建築作品)

- **Title**: Building name (required)
- **Description**: Brief description (required)
- **Year**: Construction year (required)
- **Location**: Location name (required)
- **Region**: Select from predefined regions (required)
- **Coordinates**: Latitude and longitude (required)
- **Images**: List of images with captions and alt text
- **Content**: Detailed description (Markdown)
- **Metadata**: SEO metadata

### Research Logs (研究日誌)

- **Title**: Article title (required)
- **Category**: Select from predefined categories (required)
- **Excerpt**: Brief summary (required)
- **Content**: Full article content (Markdown)
- **Related Buildings**: Link to building entries
- **Tags**: List of tags
- **Featured Image**: Primary image

### About (概要)

- **Title**: Page title (required)
- **Bio**: Biography content (Markdown, required)
- **Career**: Work history list
- **Awards**: Awards and recognitions
- **Profile Image**: Portrait photo
- **Contact**: Email, phone, social links

### Team Members (チームメンバー)

- **Name**: Person's name (required)
- **Position**: Job title (required)
- **Bio**: Biography (Markdown, required)
- **Profile Image**: Photo
- **Contact**: Email and social links

### Site Settings (サイト設定)

- **Site Title**: Website title
- **Site Description**: Meta description
- **Default OG Image**: Default sharing image
- **Navigation**: Menu items

## Editorial Workflow

Netlify CMS uses an editorial workflow with three states:

1. **Draft**: Initial content state
2. **In Review**: Ready for review
3. **Published**: Live on the site

### Publishing Process

1. Create or edit content
2. Save as draft
3. When ready, change status to "In Review"
4. Review and approve, then publish
5. Changes are committed to your Git repository

## I18n (Internationalization)

Content is stored in separate files per locale:

- Japanese: `{slug}-ja.yml`
- English: `{slug}-en.yml`

When creating content:
1. Select the locale (ja or en)
2. Fill in the content
3. Save and publish
4. Repeat for the other locale

## Media Management

Media files are stored in `public/images/uploads/`. When uploading images:

1. Images are automatically saved to the uploads folder
2. Use relative paths in content (e.g., `/images/uploads/image.jpg`)
3. Images are tracked in Git

## Development

### Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Access the CMS at `http://localhost:3000/admin`

### Using with Netlify Dev

For local development with Netlify CMS:

```bash
npm install -g netlify-cli
netlify dev
```

This enables local authentication with Netlify Identity.

## Troubleshooting

### CMS Not Loading

- Ensure `public/admin/config.yml` exists
- Check that the admin page is accessible at `/admin`
- Verify Git Gateway is enabled in Netlify settings

### Authentication Issues

- Confirm Netlify Identity is enabled
- Check that you're logged into the correct Netlify account
- Verify the site is deployed (Git Gateway requires HTTPS)

### Content Not Appearing

- Ensure files are committed to Git
- Check file naming convention (`{slug}-{locale}.yml`)
- Verify the content directory structure

## Additional Resources

- [Netlify CMS Documentation](https://www.netlifycms.org/docs/)
- [Netlify Identity](https://docs.netlify.com/identity/overview/)
- [Git Gateway](https://docs.netlify.com/identity/git-gateway/)
- [I18n with Netlify CMS](https://www.netlifycms.org/docs/i18n/)
