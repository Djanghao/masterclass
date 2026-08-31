# Top Down DP with Proper comments: Java Readable Code, BitMasking

**Author:** Kan12693
**Votes:** 25
**Link:** [https://leetcode.com/problems/parallel-courses-ii/solutions/1071068/](https://leetcode.com/problems/parallel-courses-ii/solutions/1071068/)

---

class Solution {
    int[] prerequisites;
    int[] dp;
    int k; 
    public int minNumberOfSemesters(int n, int[][] dependencies, int k) {
	    prerequisites = new int[n]; // This array contains all the courses required by a destination course.
	    dp = new int[1 << n];
	    Arrays.fill(dp, -1);
        this.k = k;
        
        //Setting prerequisites dependencies.
        for(int i = 0; i < dependencies.length; i++) {
            prerequisites[dependencies[i][1] - 1] |= (1 << dependencies[i][0] - 1); 
        }
        
        int maskWhenNoCourseTaken = 0;
        //Inititally no course will be taken, so every ith bit as 1.
        for (int i = 0; i < n; i++) {
            maskWhenNoCourseTaken |= (1 << i);
        }
        
	    return findMinSemesters(maskWhenNoCourseTaken);
    }

    /**
    Greedy won't work in this question, because lets say if you two different connected components then
	there may be possible combinations
    which lead to minimimum team to visit every node. 
    Try to apply greedy in two different connected components and then try to find solution with different combinations.
    
    This is top down approach, 
    you can think about find shortest path from maskWhenNoCourseTaken to 0.
    Lets say we have n = 4
    so our source will be 1111 and destination will be 0000.
    Now you have edges to some other mask ,try to find adjancents mask and iterate over them.
    So suppose if k= 2 and mask == 1111 , now you will have adjancents 0011 , 1001, 0101 so on.
    To find adjacent of currentMask, you need to go throgh all course from 0 to n and check if ith course is not previously taken 
	and all it prerequisite have been taken successfully. Then put ith available course into bucket.
    So create bucket of all available course like above. Now you have to check if available courses(with zero indegree) are greater 
	than K then find all possible combinations of them, else take greedy approach and select all available courses and made them 0 in mask.
    Rest of things you can observe.
    it is very good question and you can also use bfs on all possible comibnations think like every single bitmask is a node.
    **/
    
    private int findMinSemesters(int currentMask) {
        if(currentMask == 0)
            return 0;
        else if(dp[currentMask] != -1)
            return dp[currentMask];
        else {
            List<Integer> bucket = new ArrayList<>();
            for(int i = 0; i < prerequisites.length; i++) {
                //Check if ith course is not previously taken and its prereuqisites are already visited/completed,
                //then add ithcousrse into bucket.
                if(((1 << i) & currentMask) != 0 && (prerequisites[i] & currentMask) == 0) {
                    bucket.add(i);
                }
            }
            
            //If bucket with available courses is greater than k then find all possible combination 
            //and get min number of semesters to complete rest of courses.
            if(bucket.size() > k) {
                int ans = Integer.MAX_VALUE;
                List<Integer> combinations = new ArrayList<>();
                getAllCombination(combinations, bucket, k, currentMask, 0);
                for(int comb: combinations) {
                    ans = Math.min(1 + findMinSemesters(comb), ans);
                }
                dp[currentMask] = ans;
            } //If you can take all avaialble courses in single semeseter.
            else {
                int temp = currentMask;
                //Making bit of to all available courses 0(means course is completed), since order won't matter here.
                for(int zeroIndegreeCourse: bucket) 
                    temp = (1 << zeroIndegreeCourse) ^ temp;
                
                dp[currentMask] = 1 + findMinSemesters(temp);
            }
            return dp[currentMask];
        }
    }
    
    /**
        No need to remember gosper hack, make it intutive.
    **/
    static void getAllCombination(List<Integer> ans, List<Integer> bucket, int k,
                                    int currentMask, int currentCourse) {
        
        if(k == 0) {
            ans.add(currentMask);
        }
        
        for(int i = currentCourse; i < bucket.size(); i++) {
            //Making ith course to zero(means completed)
            int temp = (1 << bucket.get(i)) ^ currentMask;
            getAllCombination(ans, bucket, k - 1, temp, i + 1);
        }
    }
}