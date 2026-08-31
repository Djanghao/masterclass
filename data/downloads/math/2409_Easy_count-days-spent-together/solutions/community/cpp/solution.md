# C++ || easy to understand || 100%

**Author:** adarshmalviya
**Votes:** 13
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/2588389/](https://leetcode.com/problems/count-days-spent-together/solutions/2588389/)

---


	class Solution {
	private:
    int days[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    vector<int> sumDays;
	
	public:
	int totalDays(string str){
        int month = stoi(str.substr(0, 2)), day = stoi(str.substr(3));    
        return sumDays[month - 1] + day;
    }
    int countDaysTogether(string arriveAlice, string leaveAlice, string arriveBob, string leaveBob) {
        sumDays.push_back(0);
        for(int i =0;i<12;i++){
            sumDays.push_back(sumDays.back() + days[i]);
        }
        
        int arrival = max(totalDays(arriveAlice), totalDays(arriveBob));
        int departure = min(totalDays(leaveAlice), totalDays(leaveBob));
        int countDays = departure - arrival +1;
        
		return max(0, countDays);
        
		}
	};
