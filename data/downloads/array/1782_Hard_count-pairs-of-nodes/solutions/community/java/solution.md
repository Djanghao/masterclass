# Java Readable Code(2 Pointers)

**Author:** user9306V
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-pairs-of-nodes/solutions/1179051/](https://leetcode.com/problems/count-pairs-of-nodes/solutions/1179051/)

---

The idea is to calculate the number of all possible pairs of vertices having sum of their indegrees(edges incident) greater than the query and thus employing 2 pointer strategy in a sorted array of indegrees(Classic 2 sum problem).

But there is a problem , here we need to account for each edge atmost once.For example,
say there are 4 edges between vertices 1 and 5. The Indegree of 1 equals 5 and indegree of 5 equals 6. So the sum of their indegrees is 11 , now here comes the catch , we need to subtract 4(no of edges between 1 & 5) from this sum as it was counted twice in the sum(11).

So after we get the no of pairs having sum greater than the query , we iterate over the edges to get the actual sum for these edge pairs and to update the answer in case they contributed to it earlier(with their indegree sum).

Here is the code in Java :-
```
public int twosum(int[] arr,int query)
	{
		int left = 1;//beginning point
		int right = arr.length-1;//ending point
		int total = 0;
		while(left<right)
		{
			if(arr[left]+arr[right]>query)
			{
				total+=(right-left);
				right--;
			}
			else
			{
				left++;
			}			
		}
		return total; //pairs with sum of indegrees>query
	}
	
	public int[] countPairs(int n, int[][] edges, int[] queries) {
		int[] indeg = new int[n+1];		
		for(int i = 0 ; i < edges.length ; i++)
		{
			//calculating the indegree for each node
			indeg[edges[i][0]]++;
			indeg[edges[i][1]]++;			
		}
		
		int[] duplicate = indeg.clone();
		
		Arrays.sort(duplicate);
		
		HashMap<String,Integer> map = new HashMap<>();
		for(int i = 0 ; i < edges.length ; i++)
		{
			//Putting all the edges with its frequency in a hashmap
			int a = edges[i][0];
			int b = edges[i][1];
			
			if(a>b)
			{
				int temp = a;
				a=b;
				b=temp;
			}
			
			if(map.containsKey(a+"#"+b)==false)
			map.put(a+"#"+b,1);
				
			else
			map.put(a+"#"+b,map.get(a+"#"+b)+1);	
		}

		int[] ans = new int[queries.length];
		int begin = 0;
		for(int query:queries)
		{
			int total = twosum(duplicate,query);
			Set<String> keys = map.keySet();
			for(String edge:keys)
			{
				String[] vtxs = edge.split("#");
				int vtxa = Integer.parseInt(vtxs[0]);//1st vertex of the edge 
				int vtxb = Integer.parseInt(vtxs[1]);//2nd vertex of the edge
				
				if(indeg[vtxa]+indeg[vtxb]>query && indeg[vtxa]+indeg[vtxb]-map.get(edge)<=query)//if the pair qualified earlier and doesn't qualify when each edge is considered once
				{
					total--;	
				}
			}
			ans[begin++]=total;			
		}
		
		return ans;
    }
```