# Web Crawler MultiThreading Beats 99% C++ - Fully Commented

**Author:** Cosmin-B
**Votes:** 18
**Link:** [https://leetcode.com/problems/web-crawler-multithreaded/solutions/3839872/](https://leetcode.com/problems/web-crawler-multithreaded/solutions/3839872/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is essentially a web crawling problem where we need to visit all the URLs that are under the same hostname as the start URL. The problem also requires us to implement a multithreaded solution. The first thought that comes to mind is to use a breadth-first search (BFS) approach where we start from the start URL and visit all the URLs linked from it and so on. However, since we need to implement a multithreaded solution, we need to ensure that the shared data structures are accessed in a thread-safe manner.

# Approach
<!-- Describe your approach to solving the problem. -->
Our approach is to use a queue to store the URLs to be visited and an unordered set to keep track of the URLs that have been visited. We start by adding the start URL to the queue and marking it as visited. We then create a number of worker threads equal to the number of cores on the machine. Each worker thread independently visits a URL, fetches the URLs on the page using the provided HtmlParser interface, and adds any new ones to the queue.

To ensure thread safety, we use a mutex to synchronize access to the shared data structures. We also use a condition variable to coordinate the worker threads. A worker thread waits until there is a URL to visit or all threads are done working. If there are no URLs to visit, the thread exits. After visiting a URL, the thread notifies other threads that a URL has been processed.

To determine whether a URL is under the same hostname as the start URL, we use a helper function to extract the hostname from a URL.

# Complexity
- Time complexity: he time complexity is O(n) where n is the total number of URLs. This is because each URL is visited exactly once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: he space complexity is also O(n) where n is the total number of URLs. This is because we need to store all the URLs in the queue and the visited set.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

Sure, here are the answers to the follow-up questions:

# Bonus/Follow up

1. **Assume we have 10,000 nodes and 1 billion URLs to crawl. We will deploy the same software onto each node. The software can know about all the nodes. We have to minimize communication between machines and make sure each node does equal amount of work. How would your web crawler design change?**

   In this case, we would need to distribute the URLs across the nodes in a balanced way. One possible approach is to use a consistent hashing algorithm to assign URLs to nodes. Consistent hashing would ensure that if a node is added or removed, only a minimal number of URLs need to be reassigned. Each node would then independently crawl its assigned URLs. To minimize communication between nodes, each node could maintain its own visited set.

2. **What if one node fails or does not work?**

   If a node fails, the URLs assigned to it would need to be reassigned to other nodes. This could be done by having a master node monitor the health of the worker nodes. If a worker node fails, the master node could use the consistent hashing algorithm to reassign the URLs to the remaining nodes.

3. **How do you know when the crawler is done?**

   The crawler is done when all URLs have been visited. This could be determined by having each node report back to the master node when it has finished crawling its assigned URLs. When the master node has received a completion report from all nodes, it knows that the crawling is done. Alternatively, if each node maintains its own visited set, the master node could periodically query the nodes for their visited sets and check if all URLs have been visited.

# Code
```
class Solution {
public:
    vector<string> crawl(string startUrl, HtmlParser htmlParser) {
        // Extract the hostname from the startUrl
        string hostname = getHostname(startUrl);
        vector<string> result;
        // Use an unordered_set to keep track of visited URLs
        unordered_set<string> visited;
        // Use a queue to store URLs to be visited
        queue<string> toVisit;
        // Mutex for protecting shared data
        mutex mtx;
        // Condition variable for signaling between threads
        condition_variable cv;
        // Counter for the number of working threads
        int working = 0;

        // Add the startUrl to the queue and mark it as visited
        toVisit.push(startUrl);
        visited.insert(startUrl);

        // Define the worker thread function
        auto worker = [&]() {
            while (true) {
                string url;
                {
                    // Lock the mutex before accessing shared data
                    unique_lock<mutex> lock(mtx);
                    // Wait until there is a URL to visit or all threads are done working
                    cv.wait(lock, [&]() { return !toVisit.empty() || working == 0; });
                    // If there are no URLs to visit, exit the thread
                    if (toVisit.empty()) {
                        return;
                    }
                    // Get the next URL to visit and remove it from the queue
                    url = toVisit.front();
                    toVisit.pop();
                    // Increment the working counter
                    ++working;
                }
                // Get the URLs on the page
                vector<string> urls = htmlParser.getUrls(url);
                {
                    // Lock the mutex before accessing shared data
                    lock_guard<mutex> lock(mtx);
                    // For each URL on the page, if it has not been visited and it has the same hostname, add it to the queue and mark it as visited
                    for (const string& url : urls) {
                        if (visited.find(url) == visited.end() && getHostname(url) == hostname) {
                            visited.insert(url);
                            toVisit.push(url);
                        }
                    }
                    // Decrement the working counter
                    --working;
                }
                // Notify other threads that a URL has been processed
                cv.notify_all();
            }
        };

        // Create a number of worker threads equal to the number of cores on the machine
        vector<thread> workers;
        for (int i = 0; i < thread::hardware_concurrency(); ++i) {
            workers.emplace_back(worker);
        }
        // Wait for all worker threads to finish
        for (thread& worker : workers) {
            worker.join();
        }

        // Return the visited URLs
        return vector<string>(visited.begin(), visited.end());
    }

private:
    // Helper function to extract the hostname from a URL
    string getHostname(const string& url) {
        size_t pos = string("http://").size();
        pos = url.find('/', pos);
        if (pos == string::npos) {
            return url;
        }
        return url.substr(0, pos);
    }
};

```