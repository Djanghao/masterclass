# Ruby using hashes and arrays (no linked lists)... all tests passed

**Author:** ionmx
**Votes:** 2
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/2480063/](https://leetcode.com/problems/lfu-cache/solutions/2480063/)

---



```
class LFUCache
  @capacity = nil
  @cache = {}
  @frequencies = {}
  @cachefreq = {}

  def initialize(capacity)
    @capacity = capacity
    @cache = {}
    @frequencies = {}
    @cachefreq = {}
  end


  def get(key)
    return -1 if @capacity <= 0
    return -1 if !@cache[key]
    updateFrequency(key)
    @cache[key]
  end

  def put(key, value)
    return if @capacity <= 0

    if @cache.size == @capacity && !@cache[key]
      k = @frequencies[@frequencies.keys.min].pop()
      @cache.delete(k)
      @cachefreq.delete(k)
    end

    if !@cache[key]
      @cache[key] = value
      @cachefreq[key] = 0
      updateFrequency(key)
    else
      @cache[key] = value
      updateFrequency(key)
    end
  end
    
  private
  def updateFrequency(key)

    @cachefreq[key] += 1

    freq = @cachefreq[key]
    prev = freq - 1
    if prev > 0
      @frequencies[prev].delete(key)
      @frequencies.delete(prev) if @frequencies[prev].count == 0
    end

    @frequencies[freq] = [] if !@frequencies[freq]

    @frequencies[freq].prepend(key)

  end


end
```