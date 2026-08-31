# Java BlockingQueue + ExecutorService

**Author:** bitmingw
**Votes:** 86
**Link:** [https://leetcode.com/problems/web-crawler-multithreaded/solutions/699006/](https://leetcode.com/problems/web-crawler-multithreaded/solutions/699006/)

---

Use main thread to take URLs from queue, and submit tasks into a thread pool. Threads in thread pool perform I/O and add URLs back to the queue.

The program exits when queue is empty and all tasks submitted to thread pool are completed.

BlockingQueue is thread-safe.

Other objects are only modified by the main thread, so no synchronization is needed.

```
class Solution {
    public List<String> crawl(String startUrl, HtmlParser htmlParser) {
        String hostName = getHostName(startUrl);

        List<String> res = new ArrayList<>();
        Set<String> visited = new HashSet<>();
        BlockingQueue<String> queue = new LinkedBlockingQueue<>();
        Deque<Future> tasks = new ArrayDeque<>();

        queue.offer(startUrl);

        // Create a thread pool of 4 threads to perform I/O operations.
        ExecutorService executor = Executors.newFixedThreadPool(4, r -> {
            Thread t = new Thread(r);
            // Leetcode doesn't allow executor.shutdown().
            // Use daemon threads so the program can exit.
            t.setDaemon(true);
            return t;
        });

        while (true) {
            String url = queue.poll();
            if (url != null) {
                if (getHostName(url).equals(hostName) && !visited.contains(url)) {
                    res.add(url);
                    visited.add(url);
                    // Use a thread in thread pool to fetch new URLs and put them into the queue.
                    tasks.add(executor.submit(() -> {
                        List<String> newUrls = htmlParser.getUrls(url);
                        for (String newUrl : newUrls) {
                            queue.offer(newUrl);
                        }
                    }));
                }
            } else {
                if (!tasks.isEmpty()) {
                    // Wait for the next task to complete, which may supply new URLs into the queue.
                    Future nextTask = tasks.poll();
                    try {
                        nextTask.get();
                    } catch (InterruptedException | ExecutionException e) {}
                } else {
                    // Exit when all tasks are completed.
                    break;
                }
            }
        }
        return res;
    }
    
    private String getHostName(String url) {
        url = url.substring(7);
        String[] parts = url.split("/");
        return parts[0];
    }
}
```