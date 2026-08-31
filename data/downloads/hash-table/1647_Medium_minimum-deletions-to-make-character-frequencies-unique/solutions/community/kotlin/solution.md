# (Java & Kotlin) Solutions

**Author:** AmanKumarMehra
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/2207113/](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/2207113/)

---

# Java
	class Solution {
    public int minDeletions(String s) {
        int arr[] = new int[26];
        
        for(char ch : s.toCharArray())  arr[ch - 'a']++;
        
        
        Arrays.sort(arr);
        
        int delete = 0;
        HashSet<Integer> set = new HashSet<>();
        for(int freq : arr){
            
            while(set.contains(freq) && freq > 0){
                delete++;
                freq--;
            }
            
            if(freq > 0)  set.add(freq);
        }
        
        return delete;
    }
}

# Kotlin
	class Solution {
    fun minDeletions(s: String): Int {
        var arr = Array<Int>(26){0}
        
        for(i in s.indices){
            var ch = s.get(i)
            arr[ch - 'a']++
        }  
        
        
        arr.sort()
        
        var delete = 0
        val set = hashSetOf<Int>();
        for(i in 0..25){
            var freq = arr[i]
            while(set.contains(freq) && freq > 0){
                delete++
                freq--
            }
            
            if(freq > 0)  set.add(freq);
        }
        
        return delete
    }
}