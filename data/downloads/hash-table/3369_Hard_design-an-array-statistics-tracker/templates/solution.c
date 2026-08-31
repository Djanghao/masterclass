


typedef struct {
    
} StatisticsTracker;


StatisticsTracker* statisticsTrackerCreate() {
    
}

void statisticsTrackerAddNumber(StatisticsTracker* obj, int number) {
    
}

void statisticsTrackerRemoveFirstAddedNumber(StatisticsTracker* obj) {
    
}

int statisticsTrackerGetMean(StatisticsTracker* obj) {
    
}

int statisticsTrackerGetMedian(StatisticsTracker* obj) {
    
}

int statisticsTrackerGetMode(StatisticsTracker* obj) {
    
}

void statisticsTrackerFree(StatisticsTracker* obj) {
    
}

/**
 * Your StatisticsTracker struct will be instantiated and called as such:
 * StatisticsTracker* obj = statisticsTrackerCreate();
 * statisticsTrackerAddNumber(obj, number);
 
 * statisticsTrackerRemoveFirstAddedNumber(obj);
 
 * int param_3 = statisticsTrackerGetMean(obj);
 
 * int param_4 = statisticsTrackerGetMedian(obj);
 
 * int param_5 = statisticsTrackerGetMode(obj);
 
 * statisticsTrackerFree(obj);
*/