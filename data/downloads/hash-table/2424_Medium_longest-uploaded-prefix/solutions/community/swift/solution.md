# Simple swift solution

**Author:** ZheDre1N
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/2647448/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/2647448/)

---

```
class LUPrefix {
    var last = 0
    var cache = Set<Int>()

    init(_ n: Int) {}
    
    func upload(_ video: Int) {
        appendIfNeeded(video)
    }
    
    func longest() -> Int {
        last
    }
    
    private func appendIfNeeded(_ video: Int) {
        if last + 1 == video {
            self.last = video
            processCacheIfNeeded()
        } else {
            cache.insert(video)
        }
    }
    
    private func processCacheIfNeeded() {
        guard !cache.isEmpty else { return }
        while cache.contains(last + 1) {
            last += 1
        }
    }
}
```
