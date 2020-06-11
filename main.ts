import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const env = Deno.env.toObject();

const APP_HOST = env.APP_HOST || "127.0.0.1";
const APP_PORT = env.APP_PORT || 4000;


const products = [
  {
      id: "1",
      title: "abc",
      price: 2000,
  }
]

const router = new Router();

router.get("/api/v1/products", ({ response }) => {
    response.body = products;
})

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on ${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`)
