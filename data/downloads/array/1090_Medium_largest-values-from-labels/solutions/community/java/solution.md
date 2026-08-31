# Simple Java Solution

**Author:** raghu6306766
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/1789133/](https://leetcode.com/problems/largest-values-from-labels/solutions/1789133/)

---

class Solution {
    
	public class Pair implements Comparable<Pair>{
        int v, l;
        
        Pair(int v, int l){
            this.v = v;
            this.l = l;
        }
        
        public int compareTo(Pair p){
            return p.v - this.v;
        }
    }
    
    public int largestValsFromLabels(int[] values, int[] labels, int numWanted, int useLimit) {
        int n = values.length, sum = 0;
        
        Pair[] pairs = IntStream.range(0, n).
                       mapToObj(i -> new Pair(values[i], labels[i])).sorted().toArray(Pair[] :: new);
        
        int[] freq = new int[20001];
        
        for(int i = 0; i < n && numWanted > 0; i++){
            if(++freq[pairs[i].l] <= useLimit){
                sum += pairs[i].v;
                numWanted--;
            }
        }
        
        return sum;
    }
}