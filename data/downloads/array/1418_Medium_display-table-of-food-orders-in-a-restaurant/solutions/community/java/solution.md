# Simple Java Solution

**Author:** tanvir3
**Votes:** 7
**Link:** [https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/672312/](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/672312/)

---

	class Solution {
		public List<List<String>> displayTable(List<List<String>> orders) {
			final Map<Integer,Map<String,Integer>> tablesMap = new TreeMap();  
			final Set<String> items = new TreeSet();
			final List<List<String>> res = new ArrayList();

			for(List<String> order : orders) {
				final int table = Integer.parseInt(order.get(1));
				final String item = order.get(2);

				if(!tablesMap.containsKey(table))
					tablesMap.put(table, new HashMap<String,Integer>());
				tablesMap.get(table).put(item, tablesMap.get(table).getOrDefault(item, 0) + 1);
				items.add(item);
			}

			for(final int table : tablesMap.keySet()) {
				List<String> tableList = new ArrayList();
				tableList.add(String.valueOf(table));
				for(String item : items) {
					tableList.add(String.valueOf(tablesMap.get(table).getOrDefault(item, 0)));
				}
				res.add(tableList);
			}

			final List<String> itemsList = new ArrayList<>(items);
			itemsList.add(0, "Table");
			res.add(0, itemsList);

			return res;
		}
	}