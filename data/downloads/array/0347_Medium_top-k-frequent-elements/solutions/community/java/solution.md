# 3 Java Solution using Array, MaxHeap, TreeMap

**Author:** UpTheHell
**Votes:** 423
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/81635/](https://leetcode.com/problems/top-k-frequent-elements/solutions/81635/)

---

    // use an array to save numbers into different bucket whose index is the frequency
    public class Solution {
        public List<Integer> topKFrequent(int[] nums, int k) {
            Map<Integer, Integer> map = new HashMap<>();
            for(int n: nums){
                map.put(n, map.getOrDefault(n,0)+1);
            }
            
            // corner case: if there is only one number in nums, we need the bucket has index 1.
            List<Integer>[] bucket = new List[nums.length+1];
            for(int n:map.keySet()){
                int freq = map.get(n);
                if(bucket[freq]==null)
                    bucket[freq] = new LinkedList<>();
                bucket[freq].add(n);
            }
            
            List<Integer> res = new LinkedList<>();
            for(int i=bucket.length-1; i>0 && k>0; --i){
                if(bucket[i]!=null){
                    List<Integer> list = bucket[i]; 
                    res.addAll(list);
                    k-= list.size();
                }
            }
            
            return res;
        }
    }
    
    
    
    // use maxHeap. Put entry into maxHeap so we can always poll a number with largest frequency
    public class Solution {
        public List<Integer> topKFrequent(int[] nums, int k) {
            Map<Integer, Integer> map = new HashMap<>();
            for(int n: nums){
                map.put(n, map.getOrDefault(n,0)+1);
            }
               
            PriorityQueue<Map.Entry<Integer, Integer>> maxHeap = 
                             new PriorityQueue<>((a,b)->(b.getValue()-a.getValue()));
            for(Map.Entry<Integer,Integer> entry: map.entrySet()){
                maxHeap.add(entry);
            }
            
            List<Integer> res = new ArrayList<>();
            while(res.size()<k){
                Map.Entry<Integer, Integer> entry = maxHeap.poll();
                res.add(entry.getKey());
            }
            return res;
        }
    }
    
    
    
    // use treeMap. Use freqncy as the key so we can get all freqencies in order
    public class Solution {
        public List<Integer> topKFrequent(int[] nums, int k) {
            Map<Integer, Integer> map = new HashMap<>();
            for(int n: nums){
                map.put(n, map.getOrDefault(n,0)+1);
            }
            
            TreeMap<Integer, List<Integer>> freqMap = new TreeMap<>();
            for(int num : map.keySet()){
               int freq = map.get(num);
               if(!freqMap.containsKey(freq)){
                   freqMap.put(freq, new LinkedList<>());
               }
               freqMap.get(freq).add(num);
            }
            
            List<Integer> res = new ArrayList<>();
            while(res.size()<k){
                Map.Entry<Integer, List<Integer>> entry = freqMap.pollLastEntry();
                res.addAll(entry.getValue());
            }
            return res;
        }
    }