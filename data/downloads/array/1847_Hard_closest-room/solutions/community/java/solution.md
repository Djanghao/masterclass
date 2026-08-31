# Sorting + BinarySearch + Simple Code in JAVA

**Author:** HIMANSHUCHHIKARA
**Votes:** 8
**Link:** [https://leetcode.com/problems/closest-room/solutions/1186102/](https://leetcode.com/problems/closest-room/solutions/1186102/)

---

**steps to follow:**
1. Sort the rooms array on the basis of capacity . So that we can do binary search and got the first room index which have size greater than minsize for particular query. 
2. If we have found the start index . we know that array is sorted so all size in right are going to be greater than size So iterate and find the roomId where Math.abs(room_id-prefrence) is minimum.
3. Have this point in mind if two rooms have value for Math.abs(room_id-preference) we have to select room with smaller id.
4. Go through code you will understand rest things.

**CODE:**
```
class Solution {
    public int[] closestRoom(int[][] rooms, int[][] queries) {
        Arrays.sort(rooms,new Pair());
        int[] ans=new int[queries.length];
        
        for(int i=0;i<ans.length;i++){
            int size=queries[i][1];
            int p=queries[i][0];
            
            int start=binarySearch(rooms,size);
            if(start==-1){
                ans[i]=-1;
                continue;
            }
            
            int index=find(rooms,start,p);
            ans[i]=rooms[index][0];
        }
        return ans;
    }
    
    private int find(int[][] rooms,int start,int p){
        int ans=start;
        int min=Math.abs(rooms[start][0]-p);
        for(int i=start+1;i<rooms.length;i++){
            int diff=Math.abs(rooms[i][0]-p);
            if(diff<min){
                min=diff;
                ans=i;
            }else if(diff==min){
                if(rooms[i][0]<rooms[ans][0]){
                    ans=i;
                }
            }
        }
        return ans;
    }
    
    private int binarySearch(int[][] rooms,int size){
        int lo=0 , hi=rooms.length-1;
        int ans=-1;
        while(lo<=hi){
            int mid=lo + (hi-lo)/2;
            
            if(rooms[mid][1]<size){
                lo=mid+1;
            }else{
                ans=mid;
                hi=mid-1;
            }
        }
        return ans;
    }
    
    public class Pair implements Comparator<int[]>{
        public int compare(int[] one,int[] two){
            return one[1]-two[1];
        }
    }
}
```

**Complexity:**
`Time:O(nlogn + m* (logn + n) ) where n:rooms.length , m=queries.length`
`Space:O(1) if not considered answer array which we have to return)`

Please **UPVOTE** if found it helpful and feel free to comment down or reach out to me if you have any doubt.