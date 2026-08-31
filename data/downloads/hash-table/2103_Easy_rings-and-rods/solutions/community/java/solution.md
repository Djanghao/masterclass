# [JAVA/C++] Easy solution explained with comments

**Author:** hetvigarg
**Votes:** 59
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/1624275/](https://leetcode.com/problems/rings-and-rods/solutions/1624275/)

---

We make 3 arrays for every colour rod and store the position of rings according to index there. If a position has one or more than one ring for each colour we count it.

 **JAVA:**
 
'''class Solution {

    public int countPoints(String rings) {
        int r[] = new int[10];
        int g[] = new int[10];
        int b[] = new int[10];
        
        int n = rings.length();
        
        for(int i=0; i<n; i+=2){
            
            //convert char to integer
            int a = rings.charAt(i+1)-'0';
            
            //System.out.println(rings.charAt(i) + " " + rings.charAt(i+1));
            
            //wherever rings are present add it in that colour array
            if(rings.charAt(i) == 'R'){
                r[a]++;
            }
            else if(rings.charAt(i) == 'G'){
                g[a]++;
            }
            else if(rings.charAt(i) == 'B'){
                b[a]++;
            }
        }
        
        //if all three rings are present increase count
        int count=0;
        for(int j=0; j<10; j++){
            if(r[j] > 0 && g[j] > 0 && b[j] > 0)
                count++;
        }
        
        return count;
    }
}


**C++ :**

'''class Solution {
public:

    int countPoints(string rings) {
        int r[10] = {0};
        int g[10] = {0};
        int b[10] = {0};
        
        int rod;
        for(int i=0; i<rings.size(); i+=2){
            
            //convert char to integer
            rod = rings[i+1]-'0';
            
            //wherever rings are present add it in that colour array
            if(rings[i] == 'R'){
                r[rod]++;
            }
            else if(rings[i] == 'G'){
                g[rod]++;
            }
            else if(rings[i] == 'B'){
                b[rod]++;
            }
        }
        
        //if all three rings are present increase count
        int count=0;
        for(int j=0; j<10; j++){
            if(r[j] > 0 && g[j] > 0 && b[j] > 0){
                count++;
            }
        }
        
        return count;
    }
};