# Kotlin | Java | C++ | Straight-forward recursive solution | 100% in cpp

**Author:** JaninBV
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/solutions/6154262/](https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/solutions/6154262/)

---

This was an interesting problem in a contest.  Although the problem description mentions graphs, the important thing to note is that it isn't circular, which the exception of going back and forth in conversions.  My initial solution did that, causing endless execution, so I added a boolean array for each of parts 1 and 2 so only use each conversion once.  Although you can go back and forth between converting between one currency and another, multiplying and then dividing gets you back to where you were and offers no benefit (and can cause endless execution).  The other part to note is that if there are two choices on conversions, first one and then the other, the order doesn't actually matter.  Limitting use of each conversion to once did the trick in solving the problem.

I could have set up lists of conversions to and from, but the numbers were so small, it wasn't necessary.

Recursion makes this problem easier.  This method creates a depth-first-search (DFS) type of scenario.  In the main method, call day1 with the the intial currency and value of 1.0.  I made a method called day1 and another called day2.  day1 calls itself to see if there are more conversions to try, and also calls day2.  In a particular call, if a conversion is used, it sets it to true in the used boolean array so it doesn't get used again.  A for-loop goes through the options for conversions.  After any particular conversion, day1 is called again with the new value and new currency.  And, day2 is called as well.  Since conversions can be from the first item n pairs to the 2nd, or 2nd to the 1st, either one can be used, but even so, only once.  After the for-loop, the used value is set back to false, so it can be used in the future.  Since there are no circular paths, each particular conversion should be usable only once.

In day 2, the first check is to see if we've gotten back to the original currency.  If so, check if the value passed in is the largest we've gotten.  The max value is initialized to 1.0, and it may well be, as shown in the examples, that it is optimal to not do any conversions at all.  If the initial currency has not been reached, it does the same kind of processing as day 1, using pairs2 and rates2.

Lastly, I like to use global variables to speed up processing and use less stack space.  This is not an ideal programming practice normally.  In C++, I pass in the vectors since it's easier as a whole.  I tried calling day2 from day1 immediately, without any conversion, but this was a complete waste of time since it checks for the initial currency and value is 1.0. 

Kotlin:
```
class Solution {
    
    var pairs1 = listOf<List<String>>()
    var rates1 = DoubleArray(0)
    var pairs2 = listOf<List<String>>()
    var rates2 = DoubleArray(0)
    var initialCurrency = ""
    var maxFinal : Double = 1.0
    
    fun maxAmount(initialCurrency: String, pairs1: List<List<String>>, rates1: DoubleArray, pairs2: List<List<String>>, rates2: DoubleArray): Double {
        
		this.initialCurrency = initialCurrency
        this.pairs1 = pairs1
        this.rates1 = rates1
        this.pairs2 = pairs2
        this.rates2 = rates2
        var used = BooleanArray(pairs1.size)
        day1(initialCurrency, 1.0, used)
        return maxFinal
    }
    
    fun day1(currency: String, value: Double, used: BooleanArray) {
        
        var used2 = BooleanArray(pairs2.size)
        
        var pair : List<String>
        var pCur1 : String
        var pCur2 : String
		
        // order doesn't really matter since they're mutiplied
        for (x in 0..pairs1.lastIndex) {
            if (!used[x]) {
                used[x] = true
                pair = pairs1.get(x)
                pCur1 = pair.get(0)
                pCur2 = pair.get(1)
                if (currency == pCur1) {
                    // try another day1 conversion
                    day1(pCur2, value * rates1[x], used)
                    // try converting after 1 conversion
                    day2(pCur2, value * rates1[x], used2)
                } else if (currency == pCur2) {
                    day1(pCur1, value * 1.0 / rates1[x], used) 
                    // try converting after 1 conversion
                    day2(pCur1, value * 1.0 / rates1[x], used2)
                }
                used[x] = false
            }
        }
    }
    
    fun day2(currency: String, value: Double, used: BooleanArray) {
        if (currency == initialCurrency) {
            if (value > maxFinal) {
                maxFinal = value
            }
            return
        }
        var pair : List<String>
        var pCur1 : String
        var pCur2 : String
        
		for (x in 0..pairs2.lastIndex) {
            if (!used[x]) {
                used[x] = true
                pair = pairs2.get(x)
                pCur1 = pair.get(0)
                pCur2 = pair.get(1)
                if (currency == pCur1) {
                    // try another conversion
                    day2(pCur2, value * rates2[x], used)
                } else if (currency == pCur2) {
                    // try another conversion
                    day2(pCur1, value * 1.0 / rates2[x], used)
                }
                used[x] = false
            }
        }
    }
}
```

Java:  note that it's important to check if the currencies match using equals method instead of ==.  The later only works to check if string is at the same address, so no conversions took place using ==.
```
class Solution {
    
    List<List<String>> pairs1;
    double[] rates1;
    List<List<String>> pairs2;
    double[] rates2;
    String initialCurrency;
    double maxFinal = 1.0;
    
    public double maxAmount(String initialCurrency, List<List<String>> pairs1, double[] rates1, List<List<String>> pairs2, double[] rates2) {
          
        this.initialCurrency = initialCurrency;
        this.pairs1 = pairs1;
        this.rates1 = rates1;
        this.pairs2 = pairs2;
        this.rates2 = rates2;
        boolean[] used = new boolean[pairs1.size()];
        day1(initialCurrency, 1.0, used);
        return maxFinal;
    }
    
    private void day1(String currency, double value, boolean[] used) {
	
        boolean used2[] = new boolean[pairs2.size()];
        
        List<String> pair;
        String pCur1;
        String pCur2;
        
        // order doesn't really matter since they're mutiplied
        for (int x = 0; x < pairs1.size(); x++) {
            if (!used[x]) {
                used[x] = true;
                pair = pairs1.get(x);
                pCur1 = pair.get(0);
                pCur2 = pair.get(1);
                if (currency.equals(pCur1)) {
                    // try another day1 conversion
                    day1(pCur2, value * rates1[x], used);
                    // try converting after 1 conversion
                    day2(pCur2, value * rates1[x], used2);
                } else if (currency.equals(pCur2)) {
                    day1(pCur1, value * 1.0 / rates1[x], used); 
                    // try converting after 1 conversion
                    day2(pCur1, value * 1.0 / rates1[x], used2);
                }
                used[x] = false;
            }
        }
    }
    
    private void day2(String currency, double value, boolean used[]) {
        if (currency.equals(initialCurrency)) {
            if (value > maxFinal) {
                maxFinal = value;
            }
            return;
        }
        
        List<String> pair; 
        String pCur1;
        String pCur2;
        
        for (int x = 0; x < pairs2.size(); x++) {
            if (!used[x]) {
                used[x] = true;
                pair = pairs2.get(x);
                pCur1 = pair.get(0);
                pCur2 = pair.get(1);
                if (currency.equals(pCur1)) {
                    // try another conversion
                    day2(pCur2, value * rates2[x], used);
                } else if (currency.equals(pCur2)) {
                    // try another conversion
                    day2(pCur1, value * 1.0 / rates2[x], used);
                }
                used[x] = false;
            }
        }
    }
}
```

C++:
```
class Solution {
public:
    
    string initialCurrency;
    double maxFinal = 1.0;
    
    double maxAmount(string initialCurrency, vector<vector<string>>& pairs1, vector<double>& rates1,
										vector<vector<string>>& pairs2, vector<double>& rates2) {
        
        this->initialCurrency = initialCurrency;
        vector<bool> used(pairs1.size(), false);
        day1(initialCurrency, 1.0, used, pairs1, rates1, pairs2, rates2);
        return maxFinal;
    }
    
    private: void day1(string currency, double value, vector<bool>& used, 
                       vector<vector<string>>& pairs1, vector<double>& rates1, 
                       vector<vector<string>>& pairs2, vector<double>& rates2) {
        
		vector<bool> used2(pairs2.size(), false);
        
        vector<string> pair;
        string pCur1;
        string pCur2;
        
        // order doesn't really matter since they're mutiplied
        for (int x = 0; x < pairs1.size(); x++) {
            if (!used[x]) {
                used[x] = true;
                pair = pairs1[x];
                pCur1 = pair[0];
                pCur2 = pair[1];
                if (currency == pCur1) {
                    // try another day1 conversion
                    day1(pCur2, value * rates1[x], used, pairs1, rates1, pairs2, rates2);
                    // try converting after 1 conversion
                    day2(pCur2, value * rates1[x], used2, pairs2, rates2);
                } else if (currency == pCur2) {
                    day1(pCur1, value * 1.0 / rates1[x], used, pairs1, rates1, pairs2, rates2); 
                    // try converting after 1 conversion
                    day2(pCur1, value * 1.0 / rates1[x], used2, pairs2, rates2);
                }
                used[x] = false;
            }
        }
    }
    
    void day2(string currency, double value, vector<bool>& used, 
                      vector<vector<string>>& pairs2, vector<double>& rates2) {
        if (currency == initialCurrency) {
            if (value > maxFinal) {
                maxFinal = value;
            }
            return;
        }
        
        vector<string> pair; 
        string pCur1;
        string pCur2;
        
        for (int x = 0; x < pairs2.size(); x++) {
            if (!used[x]) {
                used[x] = true;
                pair = pairs2[x];
                pCur1 = pair[0];
                pCur2 = pair[1];
                if (currency == pCur1) {
                    // try another conversion
                    day2(pCur2, value * rates2[x], used, pairs2, rates2);
                } else if (currency == pCur2) {
                    // try another conversion
                    day2(pCur1, value * 1.0 / rates2[x], used, pairs2, rates2);
                }
                used[x] = false;
            }
        }
    }
};
```

Thank you for reading!  If you like my post, please upvote!