# Venue Backend

## Kurulum

```bash
npm install
npm run dev
```

## API Uç Noktaları

- `POST /auth/signup`
- `POST /auth/login`
- `POST /auth/logout`
- `POST /auth/verify-phone`
- `POST /auth/upload-photo`
- `GET /discover/venues?lat&lng`
- `GET /discover/experiences?lat&lng&mood`
- `GET /events`
- `POST /events`
- `GET /events/:id`
- `GET /procircle/members`
- `POST /procircle/apply`
- `GET /conversations`
- `POST /conversations/:id/messages`
- `POST /payments/intent`
- `POST /payments/complete`

## Güvenlik

JWT, refresh token, hız sınırlandırma, input sanitization ve rol bazlı guard middleware içerir.
