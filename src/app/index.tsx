import React from "react"
import ReactDOM from "react-dom/client"

import { queryClient } from "~/shared/api/query-client.js"

import { App } from "./app.js"
import { Providers } from "./providers/index.js"
import { router } from "./router.js"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <Providers router={router} client={queryClient}>
      <App />
    </Providers>
  </React.StrictMode>,
)
