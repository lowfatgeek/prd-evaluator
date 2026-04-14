FROM node:18-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm ci || npm install

# Copy source code
COPY . .

# Next.js disables telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED=1

# Build the app
RUN npm run build

# Expose port (Easypanel will map to this)
EXPOSE 3000

ENV PORT=3000

# Start Next.js
CMD ["npm", "start"]
