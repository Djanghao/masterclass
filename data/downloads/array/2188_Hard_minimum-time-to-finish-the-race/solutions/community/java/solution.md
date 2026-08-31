# Java DP Easy to understand solution with comments

**Author:** rpc7
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/2389898/](https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/2389898/)

---

Bottom up dp - for each lap i, see if we get optimal time by changing tires in lap j before it ie dp[i] = Math.min (dp[i], dp[j] + changeTime + dp[i - j]) 

```
    public int minimumFinishTime(int[][] tires, int changeTime, int numLaps) {
        
        //Min time to finish all laps without changing tires, compared across all tires
        int[] minTimes = new int[numLaps +1];
        Arrays.fill(minTimes, Integer.MAX_VALUE);
        for(int[] tire: tires ){
            populateMinTime(minTimes, tire , changeTime, numLaps);
        }
        
		//For every lap i , see if you get better time by changing tires on all laps before i ie 1 to i using j loop
		//eg : for lap 10, check if you get better time by changing tire at all laps before 10 ie 1.2.3....9
        for(int i=1; i<=numLaps; i++){
            for(int j=1; j<i; j++){
                minTimes[i] = Math.min( minTimes[i],  minTimes[j] + changeTime + minTimes[i-j]);
            }            
        }
        return minTimes[numLaps];
    }
    
    void populateMinTime(int[] minTimes, int[] tire, int changeTime, int numLaps){
        
        int baseTime = tire[0];
        int expTime = tire[1];
        
        //To keep track of a lap time & entire race time using this tire
        int lapTime = baseTime;
        int totalTime = lapTime;
        
        //lap 1 will only have base time, calculate from lap 2
        minTimes[1] = Math.min(baseTime, minTimes[1]);
        for(int lap=2; lap<=numLaps; lap++){
           
            lapTime*=expTime; //time for current lap = prevLapTime*expTime instead of recalcuating entire value
                
            //***IMP change time is better, no point calculating further
            if(lapTime> changeTime+baseTime) break; 
                
            totalTime+=lapTime;
            
            minTimes[lap] = Math.min(minTimes[lap], totalTime);
        }      
    }