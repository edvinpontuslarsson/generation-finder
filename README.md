# generation-finder

Web app to see which generation you belong to. Repo will include end-to-end testing.

## Public URL

https://generation-finder.web.app/

## Cypress Instructions

### Open Cypress test runner

```bash
npx cypress open
```

### Run Cypress tests directly

```bash
npx cypress run
```

## Docker-compose Instructions

### Run with Docker-compose

Be navigated to this root directory in a terminal and enter command:

```bash
docker-compose up
```

When finished, the web client will be available on port 3000

http://localhost:3000/

### Tear down

```bash
docker-compose down
```

### Rebuild

```bash
docker-compose up --build
```

## Publish to Firebase Instructions

```bash
cd client
npm run build
firebase deploy
```
