# O(1) Space || 3 Lines

**Author:** Rowque
**Votes:** 47
**Link:** [https://leetcode.com/problems/min-max-game/solutions/2112080/](https://leetcode.com/problems/min-max-game/solutions/2112080/)

---

# C++
    int minMaxGame(vector<int>& a) {
        for(int n= size(a); n>1 ; n-=(n/2)){
            for(int i=0;i<n/2;i++) 
			    a[i]= (i%2)==1? max(a[2 * i], a[2 * i + 1]) : min(a[2 * i], a[2 * i + 1]);   
        }
        return a[0];
    }
# Java
    public int minMaxGame(int[] a) {
        for(int n= a.length; n>1 ; n-=(n/2)){
            for(int i=0;i<n/2;i++) 
			    a[i]= (i%2)==1? Math.max(a[2 * i], a[2 * i + 1]) : Math.min(a[2 * i], a[2 * i + 1]);   
        }
        return a[0];
    }
