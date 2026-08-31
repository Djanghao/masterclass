# [100% speed] The fastest solution BFS

**Author:** moranilt
**Votes:** 0
**Link:** [https://leetcode.com/problems/web-crawler/solutions/4552221/](https://leetcode.com/problems/web-crawler/solutions/4552221/)

---

# Intuition
First of all we should think that all pages can be connected, that is why it's classic problem for BFS or DFS. We'll take BFS because it's more efficient.

# Approach
Extract a host from startUrl and store it to variable `host`. 

We should not visit the same page twice that's why we need a `visited` map to store visited links.

Create new `queue` where you will store urls. Pish current `startUrl` into this queue.

Take url from queue, check it for visited flag and skip all other actions if it have been visited. Otherwise add it to the result array and mark this link as visited.

Call `GetUrls` function on current link from queue and get array of urls for page. Iterate over this new links by checking the prefix using `host` variable. If new url has prefix `host` - it's valid url, store it to the queue.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(log(n))$$

# Code
```
/**
 * // This is HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * type HtmlParser struct {
 *     func GetUrls(url string) []string {}
 * }
 */

func crawl(startUrl string, htmlParser HtmlParser) []string {
  // visited map for urls
  visited := make(map[string]bool)
  // result array
  var result []string
  // Create new queue
  q := NewQueue[string](300)
  // extract host from startUrl
  host := extractHost(startUrl)
  // push startUrl to the queue
  q.Push(startUrl)
  for !q.IsEmpty() {
    // extract top url from the queue
    url := *q.Pop()
    // skip this url if it have been visited
    if visited[url] {
      continue
    }
    // add this url to thee result array
    result = append(result, url)
    // mark as visited url
    visited[url] = true
    // get urls from this url
    newUrls := htmlParser.GetUrls(url)
    // iterate over newUrls
    for _, newUrl := range newUrls {
      // check for valid host of url
      if strings.HasPrefix(newUrl, host) {
        // push to the queue
        q.Push(newUrl)
      }
    }
  }
  
  return result
}

func extractHost(url string) string {
  count := 0
  i := 0
  for count < 3 && i < len(url) {
    if url[i] == '/' {
      count++
    }
    i++
  }
  return url[:i-1]
}

type Queue[T any] struct {
	head int
	tail int
	data []T
	size int
}

func NewQueue[T any](k int) Queue[T] {
	return Queue[T]{
		data: make([]T, k),
		tail: -1,
	}
}

func (q *Queue[T]) Push(value T) bool {
	if q.IsFull() {
		return false
	}
	q.size++
	if q.tail == len(q.data)-1 {
		q.tail = 0
	} else {
		q.tail++
	}
	q.data[q.tail] = value
	return true
}

func (q *Queue[T]) Pop() *T {
	if q.IsEmpty() {
		return nil
	}
	front := q.Front()
	q.size--
	if q.head == len(q.data)-1 {
		q.head = 0
	} else {
		q.head++
	}
	return front
}

func (q *Queue[T]) Front() *T {
	if q.IsEmpty() {
		return nil
	}
	return &q.data[q.head]
}

func (q *Queue[T]) Rear() *T {
	if q.IsEmpty() {
		return nil
	}
	return &q.data[q.tail]
}

func (q *Queue[T]) IsEmpty() bool {
	return q.size == 0
}

func (q *Queue[T]) IsFull() bool {
	return q.size == len(q.data)
}

func (q *Queue[T]) Size() int {
	return q.size
}

```