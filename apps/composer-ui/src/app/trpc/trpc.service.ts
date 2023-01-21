import { Injectable } from '@angular/core';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import { AppRouter } from '../../../../composer-api/src/main'

@Injectable({
  providedIn: 'root'
})
export class TrpcService {
  private trpc = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3333/trpc',
      }),
    ]
  });

  getTrpc() {
    return this.trpc;
  }
}
