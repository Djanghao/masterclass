# Dictionary & PriorityQueue - O(nlogk) time & O(n) space

**Author:** sa_ka_e
**Votes:** 7
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/2233441/](https://leetcode.com/problems/top-k-frequent-words/solutions/2233441/)

---

```
public class Solution {
    public IList<string> TopKFrequent(string[] words, int k) {
        Dictionary<string, int> frequencyMap = new Dictionary<string, int>();
        
        foreach(string word in words) {
            if(!frequencyMap.ContainsKey(word)) {
                frequencyMap[word] = 0;
            }
            
            frequencyMap[word]++;
        }
        
        PriorityQueue<string, KeyValuePair<string, int>> maxHeap = new(new NameComparer());
        
        foreach(KeyValuePair<string, int> entry in frequencyMap)
        {
           maxHeap.Enqueue(entry.Key, entry);
        }

        List<string> result = new List<string>();
        
        while(k > 0 && maxHeap.Count > 0) {
            string word = maxHeap.Dequeue();
            result.Add(word);
            k--;        
        }   
        
        return result;
    }
    
    public class NameComparer: IComparer<KeyValuePair<string, int>>
	{
		public int Compare(KeyValuePair<string, int> x, KeyValuePair<string,int> y) => 
			(x.Value == y.Value) ? (x.Key.CompareTo(y.Key)) : (y.Value-x.Value);
	}
}
```