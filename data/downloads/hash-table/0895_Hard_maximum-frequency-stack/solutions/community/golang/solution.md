# [95%] golang solution with explanation

**Author:** eisandbar
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-frequency-stack/solutions/1863322/](https://leetcode.com/problems/maximum-frequency-stack/solutions/1863322/)

---

We will be keeping track of 3 things:
1. **freq:** the frequency of each number in the stack. For [1,2,1,1] we get freq[1] == 3, freq[2] == 1
2. **maxFreq:** what is the current max frequency. For [1,2,1,1] we get maxFreq == 3
3. **byFreq:** for every frequency up to maxFreq what numbers have **at least** that frequency in order of appearance. byFreq[i] is a slice. For [1,2,1,1] we get:
	* byFreq[1] == [1,2]
	* byFreq[2] == [1]
	* byFreq[3] == [1]

**Pushing:**
we first incerase the frequency of val and update maxFreq if we need to
```
this.freq[val] ++
    if this.freq[val] > this.maxFreq {
        this.maxFreq = this.freq[val]
    }
```
then for the new freq[val] we append it to the corresponding byFreq slice
```
this.byFreq[this.freq[val]] = append(this.byFreq[this.freq[val]], val)
```

**Popping:**
The returned val is the last element in the byFreq[maxFreq] slice. This is the number with one of the highest frequencies that was added last to the stack.
```
 val := this.byFreq[this.maxFreq][len(this.byFreq[this.maxFreq])-1]
```
Then we remove it from the byFreq[maxFreq] slice. If the slice is now empty we decrease maxFreq.
Also we decrease freq[val]
```
this.byFreq[this.maxFreq] = this.byFreq[this.maxFreq][:len(this.byFreq[this.maxFreq])-1]
if len(this.byFreq[this.maxFreq]) == 0{
	this.maxFreq --
}
this.freq[val] --
```


**Complete code:**

```
type FreqStack struct {
    freq map[int]int
    maxFreq int
    byFreq map[int][]int
}


func Constructor() FreqStack {
    var fs FreqStack
    fs.freq = make(map[int]int)
    fs.byFreq = make(map[int][]int)
    return fs
}


func (this *FreqStack) Push(val int)  {
    this.freq[val] ++ // increasing the frequency of val
    if this.freq[val] > this.maxFreq { // updating maxFreq
        this.maxFreq = this.freq[val]
    }
    if _, found := this.byFreq[this.freq[val]]; !found { // if there is no slice for this frequency we make one
        this.byFreq[this.freq[val]] = make([]int, 0)
    }
    this.byFreq[this.freq[val]] = append(this.byFreq[this.freq[val]], val) // adding val to the end of the slice
    
}


func (this *FreqStack) Pop() int {
    val := this.byFreq[this.maxFreq][len(this.byFreq[this.maxFreq])-1] // val is the last element of the maxFreq slice
    this.byFreq[this.maxFreq] = this.byFreq[this.maxFreq][:len(this.byFreq[this.maxFreq])-1] // removing val from slice
    if len(this.byFreq[this.maxFreq]) == 0{ // if no more numbers with frequency maxFreq we decrease maxFreq
        this.maxFreq --
    }
    this.freq[val] -- // decreasing frequency of val
    return val
}
```