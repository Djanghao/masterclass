# Java Implementation || Treeset + Map

**Author:** langesichhtt_
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/solutions/5911343/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/solutions/5911343/)

---



# Code
```java []
class Pair implements Comparable<Pair>{
    int val;
    int freq;
    public Pair(int v,int f){
        this.val = v;
        this.freq = f;
    }
    public int compareTo(Pair p){
        if(this.freq == p.freq){
            return this.val - p.val;
        }else{

            return this.freq - p.freq;
        }
    }
}

class Solution {
    long sum = 0;
    HashMap<Integer,Integer> map = new HashMap<>();
    TreeSet<Pair> large = new TreeSet<>();
    TreeSet<Pair> small = new TreeSet<>();
    public void update(int x,int v){
        int freq = map.getOrDefault(x,0);
        if(large.contains(new Pair(x,freq))){
            large.remove(new Pair(x,freq));
            sum -= 1l * freq * x;
            map.put(x,freq+v);
            sum += 1l* map.get(x) * x;
            large.add(new Pair(x,map.get(x)));

        }else if(small.contains(new Pair(x,freq))){
            small.remove(new Pair(x,freq));
            map.put(x,freq+v);
            small.add(new Pair(x,map.get(x)));
        }
    }

    public void equilibrium(int x){
        while(large.size()< x && !small.isEmpty()){
            Pair second = small.last();
            large.add(second);
            sum += 1l * second.val * second.freq;
            small.remove(second);
        }

        if(small.isEmpty()){
            return;
        }

        while(true){
            Pair first = large.first();
            Pair second = small.last();

            if(first.freq<second.freq || (first.freq==second.freq && first.val < second.val)){
                large.remove(first);
                small.remove(second);
                large.add(second);
                small.add(first);
                sum -= 1l * first.val * first.freq;
                sum += 1l * second.val * second.freq;
            }else{
                break;
            }
        }
    }

    public long[] findXSum(int[] nums, int k, int x) {
        int n = nums.length;
        long ans[] = new long[n-k+1];
        // initialize set small -> (nums[i],freq)
        for(int i=0; i<n; i++){
            small.add(new Pair(nums[i],0));
        }

        for(int i=0; i<n; i++){
            update(nums[i],1); // insert ith element inside window
            if(i>=k){
                update(nums[i-k],-1); // remove starting element of window
            }
            if(i>=k-1){
                equilibrium(x);  //generate ans
                ans[i-k+1] = sum;
            }
        }
        return ans;
    }
}
```
Thanks! Please Upvote
.
.
.