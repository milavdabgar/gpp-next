This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Docker Deployment

This project includes simplified Docker configuration for deploying the static Next.js site to production.

### Quick Start

1. **Build the Docker image:**
   ```bash
   docker compose -f docker-compose.production.yml build
   ```

2. **Start the container:**
   ```bash
   docker compose -f docker-compose.production.yml up -d
   ```

3. **Check the status:**
   ```bash
   docker compose -f docker-compose.production.yml ps
   ```

### CI/CD Workflows

The project includes two GitHub Actions workflows:

- **Development CI** (`dev-ci.yml`): Runs on push to `dev` branch
  - Linting and code quality checks
  - Build verification
  - Production server test

- **Production Deployment** (`production-deploy.yml`): Deploys from `master` branch
  - Automatic deployment to production server
  - Docker image building and deployment
  - Health checks and verification

### Manual Deployment

To manually deploy to your server:

```bash
ssh user@server.gppalanpur.ac.in
cd ~/gpp-next
git pull origin master
docker compose -f docker-compose.production.yml down
docker compose -f docker-compose.production.yml build --no-cache
docker compose -f docker-compose.production.yml up -d
```

### Environment Variables

Set these in your production environment:

- `NEXT_PUBLIC_BASE_URL`: The base URL for your site (e.g., `https://server.gppalanpur.ac.in`)
- `GIT_COMMIT`: Git commit hash for tracking deployments

### Network Configuration

The application connects to the `npm-network` Docker network for reverse proxy integration with Nginx Proxy Manager or similar tools.

