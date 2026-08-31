# Go simple and fast, using worker goroutines

**Author:** gautama2221
**Votes:** 0
**Link:** [https://leetcode.com/problems/web-crawler-multithreaded/solutions/5012095/](https://leetcode.com/problems/web-crawler-multithreaded/solutions/5012095/)

---

# Intuition
In Go concurrency patterns, one that comes up often is to have multiple workers and a coordinator to check that all work is complete and return the aggregated output to the caller.

# Approach
We parse the URLs using `url.Parse` to ensure the hostnames match.

The main goroutine kicks off workers that listen on a channel for new URLs to crawl, use the htmlParser to find new URLs and sends them back on an output channel.

The main goroutine reads the output channel and hears of new URLs. It checks the cache map to see if they have been processed before. This cache check is better handled in the main goroutine rather than in the workers, because this way we avoid overly complicated and slow coordination of state through mutexes etc.

If the main goroutine finds that a new URL needs to be processed, it dispatches them to the workers.

Note that, before the main goroutine dispatches work, it increases an internal counter to track pending work. This is important to ensure no pending work is left to do. 

Note: we did not use `sync.WaitGroup` for because the `Wait` calls are blocking and that wouldn't help us. We instead needed a non-blocking way to check if there's work pending, and using a simple variable inside the controller is a simpler primitive.
 
Finally, if no pending work is left to do (because all crawls finished producing unique URLs to be crawled and those have been crawled), we close the `done` channel, which cleanly exits the worker goroutines.

# Code
```
package main

import (
	"fmt"
	"net/url"
)

func main() {
	fmt.Println(Crawl("http://news.yahoo.com", HtmlParser{}))
	fmt.Println(Crawl("http://news.google.com", HtmlParser{}))
}

// Normally this would be provided by the test, but leetcode doesn't
// provide Go support so we supply our implementation.
type HtmlParser struct{}

func (h *HtmlParser) getUrls(target string) []string {
	// For simplicity, return all URLs for all crawls.
	// Hopefully they add Go support to the leetcode tests in the future.
	return []string{
		"http://news.yahoo.com",
		"http://news.yahoo.com/news",
		"http://news.yahoo.com/news/topics/",
		"http://news.google.com",
	}
}

var maxRoutines = 10

func Crawl(startUrl string, htmlParser HtmlParser) []string {
	return crawlAll(startUrl, htmlParser)
}

func sameHostname(base string, newUrl string) bool {
	// The input is garanteed to be valid urls so skip error checking for simplicity
	u1, _ := url.Parse(base)
	u2, _ := url.Parse(newUrl)
	return u1.Host == u2.Host
}

func crawlAll(startUrl string, htmlParser HtmlParser) []string {
	in := make(chan string)
	out := make(chan []string)
	done := make(chan bool)

	cache := map[string]bool{startUrl: true}

	pending := 0

	// workers
	for i := 0; i < maxRoutines; i++ {
		go func() {
			for {
				select {

				case target := <-in:
					var candidates = []string{}
					for _, candidate := range htmlParser.getUrls(target) {
						if sameHostname(startUrl, candidate) {
							candidates = append(candidates, candidate)
						}
					}
					out <- candidates // important to pass even a nil slice to signal this work is done
				case <-done:
					return
				}
			}
		}()
	}
	// kick off the first crawl
	pending++
	in <- startUrl

	// iteratively send work to workers
	// track when they are done
	for {
		select {
		case newCandidates := <-out:
			for _, newCandidate := range newCandidates {
				// use cache
				// send new work, but update the pending tracking
				if _, ok := cache[newCandidate]; !ok {
					pending++
					cache[newCandidate] = true
					in <- newCandidate
				}
			}
			pending--

			if pending <= 0 {
				close(done) // exit all workers
				results := make([]string, 0, len(cache))
				for k := range cache {
					results = append(results, k)
				}
				return results
			}
		}

	}
}


```