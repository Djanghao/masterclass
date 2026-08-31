# A TypeScript solution

**Author:** milutindzunic
**Votes:** 2
**Link:** [https://leetcode.com/problems/query-batching/solutions/3717564/](https://leetcode.com/problems/query-batching/solutions/3717564/)

---

# Code
```
type QueryMultipleFn = (keys: string[]) => Promise<string[]>

type ResolverFn = (result: string) => void;
type ThrottledRequest = {
    key: string,
    resolve: ResolverFn
}

class QueryBatcher {
    private readonly queryMultiple: QueryMultipleFn;
    private readonly t: number;
    private throttling: boolean;
    private throttledRequests: ThrottledRequest[];

    constructor(queryMultiple: QueryMultipleFn, t: number) {
        this.queryMultiple = queryMultiple;
        this.t = t;
        this.throttling = false;
        this.throttledRequests = [];
    }

    private tryDeThrottle(): void {
        const requests = this.throttledRequests;

        if (requests.length) {
            // some requests arrived during the throttle period, time to query them

            this.queryMultiple(requests.map(req => req.key))
                .then(results => {

                    results.forEach((result, idx) => {
                        requests[idx].resolve(result);
                    });

                });

            // we just called the query method, so we are setting the throttle period
            setTimeout(() => this.tryDeThrottle(), this.t);

            this.throttledRequests = [];

        } else {
            // no requests arrived in the meantime, exit throttling mode
            this.throttling = false;
        }
    }

	async getValue(key: string): Promise<string> {
        if (!this.t) {
            // throttle period is 0, meaning we don't want to throttle requests at all
            return this.queryMultiple([key]).then(results => results[0]);
        }

        if (!this.throttling) {
            // immediately invoke the query function, thereby creating the promise we will return
            const promise = this.queryMultiple([key]).then(results => results[0]);

            // currently not throttling, so we start the throttle period...
            this.throttling = true;

            // ...set the throttle period timeout...
            setTimeout(() => this.tryDeThrottle(), this.t);

            // ...and return the promise
            return promise;
        } else {

            // we're throttling, remember the request so we can resolve the promise later
            return new Promise<string>((resolve) => {
                this.throttledRequests.push({
                    key,
                    resolve
                });
            });

        }
    }
};

```