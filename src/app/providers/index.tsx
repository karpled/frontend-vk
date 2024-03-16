import React from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RouterProvider } from "@vkontakte/vk-mini-apps-router"
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui"
import "@vkontakte/vkui/dist/vkui.css"

interface ProvidersProps {
  client: QueryClient
  router: React.ComponentProps<typeof RouterProvider>["router"]
  children: React.ReactNode
}

export const Providers = ({
  client,
  router,
  children,
}: ProvidersProps): React.ReactElement => {
  return (
    <QueryClientProvider client={client}>
      {import.meta.env.DEV && <ReactQueryDevtools />}
      <ConfigProvider>
        <AdaptivityProvider>
          <AppRoot>
            <RouterProvider router={router}>{children}</RouterProvider>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </QueryClientProvider>
  )
}
