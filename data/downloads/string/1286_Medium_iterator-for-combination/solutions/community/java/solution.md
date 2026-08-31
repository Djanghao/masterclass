# Easy Java Solution

**Author:** HimanshuBhoir
**Votes:** 11
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/1576904/](https://leetcode.com/problems/iterator-for-combination/solutions/1576904/)

---

```
class CombinationIterator {

    PriorityQueue<String> pq = new PriorityQueue<>();
    public CombinationIterator(String characters, int combinationLength) {
        generateComb(characters, combinationLength, 0, new StringBuilder());
    }
    public String next() {
        return pq.poll();
    }
    public boolean hasNext() {
        return !pq.isEmpty();
    }
    private void generateComb(String ch, int len, int st, StringBuilder sb){
        if(len == 0){
            pq.add(sb.toString());
            return;
        }
        for(int i=st; i<=ch.length()-len; i++){
            sb.append(ch.charAt(i));
            generateComb(ch, len-1, i+1, sb);
            sb.deleteCharAt(sb.length()-1);
        }
    }
}
```