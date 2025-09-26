# Hostinger Deployment Guide

[README](../README.md) • [Events Guide](./EVENTS_GUIDE.md) • [Lore Guide](./LORE_GUIDE.md) • [Deployment](./DEPLOYMENT.md)

This guide explains how to deploy the secret site to Hostinger in the `/strike-team/` subfolder.

## Prerequisites

- Hostinger hosting account
- Access to cPanel or File Manager
- Secret site project built and ready for deployment

## Hostinger Folder Structure

The Hostinger file structure is organized as follows:
```
~ (root)
├── public_html/
│   ├── images/ (images used for website "front")
│   ├── team/ (folder where timer used to be)
│   └── strike-team/ ("secret" website directory)
```

## Build the Secret Site

1. **Open the "strike-team-archives" folder path in terminal/command line**
2. **Run the build command:**
   ```bash
   npm run build:hostinger
   ```

3. **The build output will be in the `dist/` folder at the root of the project**

## Upload to Hostinger

1. **Access your Hostinger cPanel**
2. **Navigate to File Manager**
3. **Go to `public_html` folder**
4. **Navigate to the `strike-team` folder**
5. **Clear out all existing contents in the `strike-team` folder**
6. **Upload ALL contents from your local `dist/` folder to the `strike-team` folder**

**IMPORTANT:** Do not copy the `dist` folder itself. Copy what is IN the `dist` folder, and paste/drag it into the `strike-team` folder on Hostinger.

## File Structure on Hostinger

The Hostinger file structure should look like this:
```
public_html/
└── strike-team/
    ├── index.html
    ├── assets/
    │   ├── [hash].js
    │   ├── [hash].css
    │   └── [hash].png (images)
    └── .htaccess
```

## Important Notes

- **URL Structure**: The secret site is accessible at `yorkstrikes.com/strike-team/`
- **Routing**: The site uses HashRouter, so URLs will look like:
  - `yorkstrikes.com/strike-team/#/` (home)
  - `yorkstrikes.com/strike-team/#/events` (events page)
  - `yorkstrikes.com/strike-team/#/team` (team page)
  - `yorkstrikes.com/strike-team/#/lore` (lore page)

## Troubleshooting

### 404 Errors
- Make sure the `.htaccess` file is uploaded to the `strike-team` folder
- Verify that mod_rewrite is enabled on your Hostinger account

### Assets Not Loading
- Check that all files from the `dist` folder were uploaded
- Verify the `.htaccess` file is present and correct

### Routing Issues
- The site uses HashRouter, so all routes should work without server configuration
- If you see routing issues, check that the `.htaccess` file is properly uploaded

## Testing

After deployment, test these URLs:
- `yorkstrikes.com/strike-team/` - Should show the home page
- `yorkstrikes.com/strike-team/#/events` - Should show the events page
- `yorkstrikes.com/strike-team/#/team` - Should show the team page
- `yorkstrikes.com/strike-team/#/lore` - Should show the lore page

## Updates

To update the secret site:
1. Make changes locally in the "strike-team-archives" project
2. Open the "strike-team-archives" folder path in terminal/command line
3. Run `npm run build:hostinger`
4. Clear out what is in the `strike-team` folder on Hostinger
5. Copy what is IN the local `dist/` folder, and paste/drag it into the `strike-team` folder on Hostinger


