# 2 Pointers  || Without sorting

**Author:** Rowque
**Votes:** 41
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2039931/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2039931/)

---

**Description**:
+ For every we will put our **first pointer** at a string and **second pointer** at the next position of first pointer.
+ Keep on moving the **second pointer** by one step ahead if the string it is pointing is a anagram of string at **first pointer**.
+  If we found a string pointed by **second pointer** is not an anagram of string at first pointer then put string at **first pointer** in the answer array.

> Instead of deleting words, we will skip it, this will save our time.

# C++

    vector<string> removeAnagrams(vector<string>& A) {
        vector<string> ans;
        int n= size(A);
        for(int i=0;i<n;){
            int j=i+1;
            while( j<n and isang(A[i],A[j]) ) j++;
            ans.push_back(A[i]);
            i=j;
        }
        return ans;
    }
    //function for checking if two string are anagrams or not
    bool isang(string p,string q){
        vector<int> cnt(26);
        int res=0;
        for(auto i:p) cnt[i-'a']++;
        for(auto i:q) cnt[i-'a']--;         
        for(auto i:cnt) if(i!=0) return false;
        return true;
    }

# Java
    public List<String> removeAnagrams(String[] A) {
        List<String> ans= new ArrayList<>();
        int n= A.length;
        for(int i=0;i<n;){
            int j=i+1;
            while( j<n && isang(A[i],A[j]) ) j++;
            ans.add(A[i]);
            i=j;
        }
        return ans;
    }
    //function for checking if two string are anagrams or not
    boolean isang(String p,String q){
        int[] cnt= new int[26];
        int res=0;
        for(int i=0;i<p.length();i++) cnt[p.charAt(i)-'a']++;
        for(int i=0;i<q.length();i++) cnt[q.charAt(i)-'a']--;
        for(int i:cnt) if(i!=0) return false;
        return true;
    }
	
Time - O(N * M)
Space - O(1)