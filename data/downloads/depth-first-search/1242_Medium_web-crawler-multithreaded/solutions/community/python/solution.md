# Python3 Thread + Lock implementation: 256 ms. ThreadPool: 300 ms.

**Author:** KHC
**Votes:** 37
**Link:** [https://leetcode.com/problems/web-crawler-multithreaded/solutions/417762/](https://leetcode.com/problems/web-crawler-multithreaded/solutions/417762/)

---

```
from threading import Thread
from threading import Lock

class Solution:
    def __init__(self):
        self.lock = Lock()
        self.queue = collections.deque()
        self.visited = set()
    
    def extractHostName(self, url):
        return '.'.join(url.split('/')[2].split('.')[1:])    
    
    def downloadUrl(self, curr_url, htmlParser):
        next_urls = htmlParser.getUrls(curr_url)
        
		# Use Lock to protect shared states.
        with self.lock:
            for url in next_urls:
                if url not in self.visited and self.curr_hostname == self.extractHostName(url):
                    self.queue.append(url)
                    self.visited.add(url)  
    
    def crawl(self, startUrl: str, htmlParser: 'HtmlParser') -> List[str]:
        """
        :type startUrl: str
        :type htmlParser: HtmlParser
        :rtype: List[str]
        """
        self.queue.append(startUrl)
        self.curr_hostname = self.extractHostName(startUrl)
        self.visited = {startUrl}
        
        while self.queue:
            curr_url = self.queue.popleft()

            threads = list()
			# Add at least first URL from the queue
            threads.append(Thread(target=self.downloadUrl, args=(curr_url, htmlParser)))
			# If there are still URLs in the queue, add to the thread list 
            while self.queue:
                curr_url = self.queue.popleft()
                threads.append(Thread(target=self.downloadUrl, args=(curr_url, htmlParser)))
                
			# Execute this batch of threads
            for thread in threads:
                thread.start()
                
			# Main thread waiting for the above threads to finish
            for thread in threads:
                thread.join()
                
        return list(self.visited)    
```
EDIT: Thanks to @wjasonhuang 's comments. This implementation runs the risk of spinning up too many threads. I guess Leetcode's testcase is not that big.

Below is the implementation using ThreadPoolExecutor with 10 worker threads. 300 ms
```
from concurrent.futures import ThreadPoolExecutor
from threading import Lock

class Solution:
    def __init__(self):
        self.lock = Lock()
        self.queue = collections.deque()
        self.visited = set()
    
    def extractHostName(self, url):
        return '.'.join(url.split('/')[2].split('.')[1:])    
    
    def downloadUrl(self, curr_url):
        next_urls = self.htmlParser.getUrls(curr_url)
        
		# Use Lock to protect shared states.
        with self.lock:
            for url in next_urls:
                if url not in self.visited and self.curr_hostname == self.extractHostName(url):
                    self.queue.append(url)
                    self.visited.add(url)  
    
    def crawl(self, startUrl: str, htmlParser: 'HtmlParser') -> List[str]:
        """
        :type startUrl: str
        :type htmlParser: HtmlParser
        :rtype: List[str]
        """
        self.queue.append(startUrl)
        self.curr_hostname = self.extractHostName(startUrl)
        self.visited = {startUrl}
        self.htmlParser = htmlParser
		# Limit to 10 worker threads
        executor = ThreadPoolExecutor(max_workers=10)
        
        while self.queue:
            curr_url = self.queue.popleft()

            url_list = list()
			# Add at least first URL from the queue
            url_list.append(curr_url)

			# If there are still URLs in the queue, add to the list 
            while self.queue:
                curr_url = self.queue.popleft()
                url_list.append(curr_url)
            
            executor_list = list()
			# Execute this batch of threads with threadpool
            for i in range(len(url_list)):
                executor_list.append(executor.submit(self.downloadUrl, (url_list[i])))
                
			# Main thread waiting for the above threads to finish
            for future in executor_list:
                future.result()
        
        # Shutdown ThreadPool executor
        executor.shutdown()
        
        return list(self.visited)    
```