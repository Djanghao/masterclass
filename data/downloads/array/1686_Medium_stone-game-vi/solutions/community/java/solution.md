# Easy understanding with clear solution java

**Author:** asppanda
**Votes:** 9
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/1687101/](https://leetcode.com/problems/stone-game-vi/solutions/1687101/)

---

**INTUTION**
Sort in descending order the value according to the total value at the i position of the aliceValue and bobvalue

**EXPLANATION**
Pls dont take seriously and dont  downvote due to this

If u like a girl and ur friend also like the same girl u r greedy to get her and ur friend is also greedy to get her  nobody wants to lose her now if ur impressive power is x and his impressive power is y suppose and you have first chance to impress her
if x>y then u will impress her and win her heart
if x<y then u will not able to impress her but u r greedy and its on your ego what u will do surely u will try to aquire his impressive power by putting his character down so that he looses 
same happens here

Assume a stone valued [a,b] for Alice and Bod.
Alice takes it, worth a for Alice,
Bob takes it, worth b for Bob,
we can also consider that it worth -b for Alice.
The difference will be a+b.
That's the reason why we need to sort based on a+b.
And Alice and Bob will take one most valued stone each turn.

i think i am clear enough pls upvote if u like the solution

here is my solution in java



```
class Solution 
{
static class Pair
{
        int sum=0;
        int alice=0;
        int bob=0;
    public Pair(int sum,int alice, int bob)
{
    this.sum=sum;
	this.alice = alice;
	this.bob = bob;
}
}

// class to define user defined conparator
static class Compare {
	
	static  void compare(Pair arr[], int n)
	{
		// Comparator to sort the pair according to second element
		Arrays.sort(arr, new Comparator<Pair>() {
			@Override public int compare(Pair p1, Pair p2)
			{
				return p2.sum - p1.sum;
			}
		});
		
		
	}
}
    public int stoneGameVI(int[] aliceValues, int[] bobValues)
    {
        int n=aliceValues.length;
        Pair[] a=new Pair[n];
        for(int i=0;i<n;i++)
        {
            a[i]=new Pair(aliceValues[i]+bobValues[i],aliceValues[i],bobValues[i]);
        }
        Compare.compare(a,n);
         int al=0;int bo=0;
        for(int i=0;i<n;i++)
        {
            if(i%2==0)
            {
                al+=a[i].alice;
            }
            else
            {
                bo+=a[i].bob;
            }
        }
        return Integer.compare(al,bo);
    
    
    
    }
}

```


**PLS UPVOTE IF U LIKE THE SOLUTION**
