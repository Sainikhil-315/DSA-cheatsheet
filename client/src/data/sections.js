// All DSA content organized by section
export const dsaContent = {
  header: {
    title: 'DSA',
    subtitle: 'Quick Revision',
    meta: "For any interview prep",
  },
  
  toc: [
    { id: 'arrays', label: 'Arrays' },
    { id: 'strings', label: 'Strings' },
    { id: 'hashing', label: 'Hashing' },
    { id: 'twoptr', label: 'Two Pointers' },
    { id: 'sliding', label: 'Sliding Window' },
    { id: 'binary-search', label: 'Binary Search' },
    { id: 'recursion', label: 'Recursion/Backtrack' },
    { id: 'sorting', label: 'Sorting' },
    { id: 'linked-list', label: 'Linked List' },
    { id: 'stack-queue', label: 'Stack/Queue' },
    { id: 'trees', label: 'Trees' },
    { id: 'graphs', label: 'Graphs' },
    { id: 'dp', label: 'DP' },
    { id: 'greedy', label: 'Greedy' },
    { id: 'patterns', label: 'Patterns' },
    { id: 'complexity', label: 'Complexity' },
  ],

  sections: {
    arrays: {
      num: '01',
      title: 'Arrays',
      layout: 'grid', // grid or full-width
      cards: [
        {
          title: 'Prefix Sum',
          items: ['pre[i] = pre[i-1] + arr[i]', 'Range sum [l,r] = pre[r] - pre[l-1]', 'Subarray sum = k → use prefix + hashmap'],
          brute: 'O(n²) nested loop for every pair',
          tip: 'Build prefix array O(n), query O(1)',
        },
        {
          title: 'Kadane\'s Algorithm',
          items: ['Max subarray sum', 'curSum = max(arr[i], curSum + arr[i])', 'maxSum = max(maxSum, curSum)', 'Reset when curSum < 0'],
          brute: 'O(n²) all subarrays, track max',
        },
        {
          title: 'Merge Intervals',
          items: ['Sort by start time first', 'If cur.start ≤ last.end → merge (extend end)', 'Else push cur as new interval'],
          brute: 'Sort + compare each pair O(n²)',
        },
        {
          title: 'Next Greater Element',
          items: ['Use monotonic stack (decreasing)', 'Pop when cur > stack top → that\'s NGE', 'Circular: iterate 2n, mod n for index'],
          brute: 'O(n²) for each element scan right',
        },
        {
          title: 'Rotate Array',
          items: ['Reverse full → reverse [0,k-1] → reverse [k,n-1]', 'k = k % n (handle k > n)'],
          brute: 'Extra array, place arr[i] at (i+k)%n',
        },
        {
          title: 'Majority Element',
          items: ['Boyer-Moore Voting: candidate + count', 'count=0 → new candidate', 'Same → count++, diff → count--', 'Verify candidate in 2nd pass (if needed)'],
          brute: 'HashMap count, find > n/2',
        },
        {
          title: '3Sum / 4Sum',
          items: ['Sort array first', 'Fix one (or two) → two pointer on rest', 'Skip duplicates after finding a result'],
          brute: 'O(n³) three nested loops, use set',
        },
        {
          title: 'Trapping Rain Water',
          items: ['water[i] = min(maxL, maxR) - height[i]', 'Two-pointer: move smaller side inward', 'Precompute leftMax[], rightMax[]'],
          brute: 'For each i, scan left/right for max O(n²)',
        },
      ],
    },

    strings: {
      num: '02',
      title: 'Strings',
      layout: 'grid',
      cards: [
        {
          title: 'Anagram Check',
          items: ['Sort both strings: equal → anagram', 'Or freq array of 26 chars', 'Group anagrams: sort each word as key'],
          brute: 'Sort s1, sort s2, compare O(n log n)',
        },
        {
          title: 'Palindrome',
          items: ['Two pointers: l=0, r=n-1, compare inward', 'Longest palindrome substr: expand from center', 'Even centers: (i, i+1); Odd: (i, i)'],
          brute: 'O(n²) check all substrings',
        },
        {
          title: 'String Matching (KMP idea)',
          items: ['Basic: use find() or nested loop', 'Build LPS array for pattern', 'LPS[i] = longest proper prefix = suffix'],
          brute: 'O(n*m) slide pattern, check char by char',
        },
        {
          title: 'Longest Common Subsequence',
          items: ['dp[i][j]: LCS of s1[0..i] s2[0..j]', 'If match: dp[i][j] = 1 + dp[i-1][j-1]', 'Else: max(dp[i-1][j], dp[i][j-1])'],
          brute: 'Recursion all subsequences O(2^n)',
        },
        {
          title: 'Roman / Number Conversion',
          items: ['Map symbols → values', 'If s[i] < s[i+1] → subtract, else add', 'Build greedily largest → smallest'],
          brute: 'Iterate with map, handle subtractive pairs',
        },
        {
          title: 'Valid Parentheses',
          items: ['Stack: push open, pop on close', 'Check matching pair on pop', 'End: stack must be empty'],
          brute: 'Count open/close (only works for one type)',
        },
      ],
    },

    hashing: {
      num: '03',
      title: 'Hashing',
      layout: 'grid',
      cards: [
        {
          title: 'Frequency Map Pattern',
          items: ['unordered_map<int,int> freq', 'Top K frequent: min-heap of size K', 'First unique char: freq then scan'],
          brute: 'Nested loops to count occurrences',
        },
        {
          title: 'Subarray Sum = K',
          items: ['prefix sum + hashmap', 'mp[prefix - k] gives count of valid starts', 'Init: mp[0] = 1'],
          brute: 'O(n²) all subarrays, sum each',
        },
        {
          title: 'Two Sum / Four Sum',
          items: ['Map: store val → index', 'For each num: check if (target - num) exists', 'Insert after check (avoid same index)'],
          brute: 'O(n²) check all pairs',
        },
        {
          title: 'Longest Consecutive Sequence',
          items: ['Put all nums in unordered_set', 'Start streak only if (n-1) not in set', 'Extend: count while (n+1) exists'],
          brute: 'Sort, scan O(n log n)',
        },
      ],
    },

    twoptr: {
      num: '04',
      title: 'Two Pointers',
      layout: 'grid',
      cards: [
        {
          title: 'When to use',
          items: ['Sorted array + find pair/triplet', 'Remove duplicates in-place', 'Container with most water', 'Partitioning (Dutch flag)'],
        },
        {
          title: 'Template',
          items: ['l = 0, r = n-1', 'while l < r: check condition', 'If too small → l++', 'If too large → r--', 'If match → record, move both'],
          brute: 'Sort + O(n²) nested check',
        },
        {
          title: 'Dutch National Flag',
          items: ['Sort 0s, 1s, 2s in one pass', 'low=0, mid=0, high=n-1', '0 → swap(low,mid), low++, mid++', '1 → mid++', '2 → swap(mid,high), high--'],
        },
        {
          title: 'Container With Most Water',
          items: ['l=0, r=n-1', 'area = min(h[l], h[r]) * (r-l)', 'Move pointer with smaller height'],
          brute: 'O(n²) all pairs',
        },
      ],
    },

    sliding: {
      num: '05',
      title: 'Sliding Window',
      layout: 'grid',
      cards: [
        {
          title: 'Fixed Window',
          items: ['Max/min sum of k elements', 'Add right, subtract left element', 'Maintain window size = k'],
          brute: 'O(n*k) nested loop',
        },
        {
          title: 'Variable Window',
          items: ['l=0, r=0, expand r, shrink l', 'Shrink when condition violated', 'Track max window size', 'Use hashmap for char freq'],
          brute: 'O(n²) all substrings',
        },
        {
          title: 'Longest Substring No Repeat',
          items: ['unordered_map for last seen index', 'l = max(l, mp[c] + 1) on repeat', 'ans = max(ans, r - l + 1)'],
        },
        {
          title: 'Min Window Substring',
          items: ['need map (pattern freq), have map (window freq)', 'formed = chars with required freq', 'Shrink when formed == required', 'Track min window'],
        },
      ],
    },

    'binary-search': {
      num: '06',
      title: 'Binary Search',
      layout: 'grid',
      cards: [
        {
          title: 'Classic Template',
          items: ['lo=0, hi=n-1, mid=(lo+hi)/2', 'if arr[mid]==target → found', 'if arr[mid] < target → lo=mid+1', 'else → hi=mid-1', 'Loop: while lo <= hi'],
        },
        {
          title: 'Lower / Upper Bound',
          items: ['lower_bound: first pos ≥ target', 'upper_bound: first pos > target', 'Count occurrences = ub - lb', 'Use < for lb, <= for ub condition'],
        },
        {
          title: 'On Answer (BS on result space)',
          items: ['When: min/max of something feasible', 'Define: check(mid) → bool', 'lo = min possible, hi = max possible', 'Find last/first valid mid', 'Examples: Koko eating bananas, allocate books'],
          brute: 'Linear scan all possible answers',
        },
        {
          title: 'Rotated Sorted Array',
          items: ['Find which half is sorted', 'if arr[lo] <= arr[mid]: left half sorted', 'Check if target in sorted half', 'Move lo/hi accordingly'],
          brute: 'Linear scan O(n)',
        },
        {
          title: 'Peak Element / Mountain',
          items: ['if arr[mid] < arr[mid+1]: peak is right', 'else: peak is at mid or left', 'Mountain array: binary search on slope'],
        },
        {
          title: '2D Matrix Search',
          items: ['Treat as 1D: mid → (mid/cols, mid%cols)', 'Or: start top-right, go left/down'],
        },
      ],
    },

    recursion: {
      num: '07',
      title: 'Recursion / Backtracking',
      layout: 'grid',
      cards: [
        {
          title: 'Backtracking Template',
          items: ['Base case → add to result, return', 'For each choice: make choice', 'Recurse with updated state', 'Undo choice (backtrack)'],
          tip: 'Think "decision tree" — each node is a state',
        },
        {
          title: 'Subsets',
          items: ['At each index: include or exclude', '2^n subsets total', 'Duplicates: sort + skip same element at same level', 'if i>start && arr[i]==arr[i-1]: continue'],
        },
        {
          title: 'Permutations',
          items: ['Swap approach: swap(arr[i], arr[start])', 'Recurse for start+1', 'Swap back to restore', 'Or: used[] bool array + build path'],
        },
        {
          title: 'Combination Sum',
          items: ['Can reuse: recurse same index', 'Can\'t reuse: recurse i+1', 'Prune: if sum > target, return', 'Sort first for better pruning'],
        },
        {
          title: 'N-Queens / Sudoku',
          items: ['Place, validate constraints, recurse', 'If invalid, remove and try next', 'N-Queens: check row, col, diagonals', 'Sudoku: check row, col, 3x3 box'],
        },
        {
          title: 'Word Search',
          items: ['DFS from each cell', 'Mark visited: board[r][c] = \'#\'', 'Restore: board[r][c] = original', '4 directions: dr[]={0,0,1,-1}'],
        },
      ],
    },

    sorting: {
      num: '08',
      title: 'Sorting',
      layout: 'grid',
      cards: [
        {
          title: 'Merge Sort',
          items: ['Divide at mid, sort halves, merge', 'Merge: compare & pick smaller O(n)', 'Use for: count inversions, sort linked list', 'Stable, O(n log n), O(n) space'],
        },
        {
          title: 'Quick Sort',
          items: ['Pick pivot (last/random), partition', 'Elements < pivot | pivot | elements > pivot', 'Recurse on both sides', 'Avg O(n log n), Worst O(n²)'],
        },
        {
          title: 'Custom Sort Tricks',
          items: ['Sort by freq: sort with comparator', 'Sort intervals by start: sort(v.begin(), v.end())', 'sort(arr, arr+n, greater<int>()) for desc', 'Partial sort: nth_element O(n)'],
        },
        {
          title: 'Counting / Radix Sort',
          items: ['When range small: count array of size max+1', 'Count freq → prefix → place elements', 'O(n+k) time, O(k) space', 'Useful for: sort 0/1/2, characters'],
        },
      ],
    },

    'linked-list': {
      num: '09',
      title: 'Linked List',
      layout: 'grid',
      cards: [
        {
          title: 'Floyd\'s Cycle Detection',
          items: ['slow=fast=head', 'slow=slow→next, fast=fast→next→next', 'Meet → cycle exists', 'Find start: reset one to head, move both by 1'],
          brute: 'HashSet of visited nodes',
        },
        {
          title: 'Reverse Linked List',
          items: ['prev=null, cur=head', 'next=cur→next, cur→next=prev', 'prev=cur, cur=next', 'Return prev'],
        },
        {
          title: 'Find Middle',
          items: ['slow/fast pointers', 'fast moves 2x speed', 'When fast reaches end, slow = mid', 'Odd: exact mid. Even: upper mid'],
        },
        {
          title: 'Merge K Sorted Lists',
          items: ['Min-heap (priority_queue)', 'Push heads of all lists', 'Pop min, push its next', 'O(n log k) where k = num lists'],
          brute: 'Collect all, sort, rebuild O(n log n)',
        },
        {
          title: 'LRU Cache',
          items: ['HashMap + Doubly Linked List', 'Map: key → node', 'DLL: maintains access order', 'Get: move to front; Put: evict tail if full'],
        },
        {
          title: 'Intersection of Lists',
          items: ['Two pointer: when one ends, redirect to other\'s head', 'They meet at intersection (or null)', 'Lengths equalize via redirection'],
          brute: 'HashSet of nodes from list A, check in B',
        },
      ],
    },

    'stack-queue': {
      num: '10',
      title: 'Stack / Queue / Monotonic',
      layout: 'grid',
      cards: [
        {
          title: 'Monotonic Stack',
          items: ['Increasing: pop if cur < top (find prev greater)', 'Decreasing: pop if cur > top (find next greater)', 'Used in: histogram, NGE, stock span', 'Stores indices usually, not values'],
        },
        {
          title: 'Largest Rectangle in Histogram',
          items: ['Monotonic increasing stack', 'For each bar: pop while cur < top', 'Width = cur_idx - stack.top() - 1', 'Area = height[popped] * width'],
          brute: 'O(n²) expand left/right for each bar',
        },
        {
          title: 'Sliding Window Maximum',
          items: ['Monotonic deque (decreasing)', 'Remove indices outside window from front', 'Remove smaller elements from back', 'Front of deque = max of window'],
          brute: 'O(n*k) scan each window',
        },
        {
          title: 'Min Stack',
          items: ['Two stacks: main + minTracker', 'Push to minTracker if ≤ current min', 'Pop from minTracker if top = popped value', 'Or: store (val, currentMin) pairs'],
        },
      ],
    },

    trees: {
      num: '11',
      title: 'Trees',
      layout: 'grid',
      cards: [
        {
          title: 'Traversals',
          items: ['Inorder (L-Root-R): BST gives sorted', 'Preorder (Root-L-R): copy tree, serialize', 'Postorder (L-R-Root): delete tree', 'Level order: BFS with queue', 'Morris traversal: O(1) space inorder'],
        },
        {
          title: 'Height / Diameter',
          items: ['Height: 1 + max(left, right)', 'Diameter: left_h + right_h at each node', 'Track global max via reference/pointer', 'Balanced: |left_h - right_h| ≤ 1'],
        },
        {
          title: 'LCA (Lowest Common Ancestor)',
          items: ['If root==null or root==p or root==q: return root', 'Recurse left and right', 'Both non-null → root is LCA', 'Else return non-null one'],
        },
        {
          title: 'BST Operations',
          items: ['Search: go left if <, right if >', 'Insert: reach null, insert there', 'Delete: 3 cases (leaf, one child, two children)', 'Two children: replace with inorder successor', 'Validate BST: inorder must be strictly increasing'],
        },
        {
          title: 'Path Sum Problems',
          items: ['Root-to-leaf sum: pass remaining target', 'Any path sum: at each node, max(0, left) + max(0, right) + val', 'Path with max sum: use global variable'],
        },
        {
          title: 'Serialize / Deserialize',
          items: ['Preorder + null markers ("null,")', 'Use queue for deserialization', 'Split by delimiter, build recursively'],
        },
      ],
    },

    graphs: {
      num: '12',
      title: 'Graphs',
      layout: 'grid',
      cards: [
        {
          title: 'BFS',
          items: ['Queue + visited array', 'Shortest path in unweighted graph', 'Level-by-level exploration', 'Multi-source BFS: push all sources initially'],
          tip: 'Use when: shortest path, level order, nearest X',
        },
        {
          title: 'DFS',
          items: ['Recursive or stack + visited', 'Connected components: DFS from each unvisited', 'Detect cycle: visited + recursion stack', 'Topological sort: post-order DFS'],
          tip: 'Use when: all paths, cycle detect, topo sort',
        },
        {
          title: 'Dijkstra\'s',
          items: ['Min-heap (dist, node)', 'dist[] = INF, dist[src] = 0', 'Relax edges: if dist[u]+w < dist[v], update', 'Only works with non-negative weights'],
          brute: 'Bellman-Ford O(VE) for negative weights',
        },
        {
          title: 'Topological Sort',
          items: ['DFS: add to stack after visiting all neighbors', 'Kahn\'s (BFS): in-degree array', 'Add zero in-degree to queue, decrement neighbors', 'If output size < V: cycle exists'],
        },
        {
          title: 'Union-Find (DSU)',
          items: ['find(x): path compression', 'union(x,y): rank-based union', 'Use: detect cycle, count components', 'MST (Kruskal): sort edges, union if no cycle'],
        },
        {
          title: 'Grid Problems',
          items: ['Treat cells as graph nodes', '4-directional: dr={0,0,1,-1}, dc={1,-1,0,0}', 'Islands: DFS/BFS flood-fill, mark visited', '0-1 BFS: deque (0-cost front, 1-cost back)'],
          brute: 'Classic: Number of islands, shortest path in maze',
        },
      ],
    },

    dp: {
      num: '13',
      title: 'Dynamic Programming',
      layout: 'grid',
      cards: [
        {
          title: '1D DP Patterns',
          items: ['Fibonacci / Climbing stairs', 'House robber: dp[i] = max(dp[i-2]+arr[i], dp[i-1])', 'Jump Game: check if can reach each index', 'Decode ways: dp[i] = dp[i-1] + dp[i-2] (if valid)'],
          brute: 'Recursion with memoization → then tabulate',
        },
        {
          title: 'Knapsack (0/1)',
          items: ['dp[i][w] = max value using i items, capacity w', 'Include: dp[i-1][w-wt] + val; Exclude: dp[i-1][w]', 'Space opt: 1D array, traverse right to left', 'Subset sum: dp[i][j] = dp[i-1][j] || dp[i-1][j-arr[i]]'],
        },
        {
          title: 'LIS (Longest Increasing Subsequence)',
          items: ['O(n²): dp[i] = max(dp[j]+1) for j<i, arr[j]<arr[i]', 'O(n log n): patience sorting with binary search', 'tails[] array: lower_bound replacement'],
        },
        {
          title: '2D DP / Grid DP',
          items: ['Unique paths: dp[i][j] = dp[i-1][j] + dp[i][j-1]', 'Min path sum: dp[i][j] = grid[i][j] + min(up, left)', 'Edit distance: if match dp[i-1][j-1], else 1+min(3 ops)'],
        },
        {
          title: 'Partition / Palindrome DP',
          items: ['Palindrome partition: isPalin[i][j] precomputed', 'Min cuts: dp[i] = min cuts for s[0..i]', 'Burst balloons / matrix chain: interval DP', 'dp[i][j] = best way to solve subproblem [i..j]'],
        },
        {
          title: 'Stock Problems',
          items: ['Buy once: min so far, max profit', 'Infinite tx: add profit when price rises', 'K tx: dp[k][i] states', 'Cooldown: dp[i] = max(dp[i-1], dp[i-2] + profit)'],
        },
      ],
    },

    greedy: {
      num: '14',
      title: 'Greedy',
      layout: 'grid',
      cards: [
        {
          title: 'When Greedy Works',
          items: ['Greedy choice property holds', 'Optimal substructure exists', 'Prove by exchange argument', 'Common hint: sort first, then greedy'],
        },
        {
          title: 'Interval Scheduling',
          items: ['Max non-overlapping: sort by end time', 'Pick earliest ending, skip overlapping', 'Min intervals to cover: sort by start'],
        },
        {
          title: 'Jump Game',
          items: ['Track maxReach at each step', 'If i > maxReach → can\'t proceed', 'Jump Game II: count jumps when reaching threshold', 'Update threshold at each jump'],
        },
        {
          title: 'Task Scheduling / Candy',
          items: ['Candy: two passes (left→right, right→left)', 'Task scheduler: freq count + cooldown math', 'Huffman: min-heap, combine two smallest'],
        },
      ],
    },

    patterns: {
      num: '15',
      title: 'Pattern Recognition',
      subtitle: 'See this → Think that',
      layout: 'pattern-grid',
      items: [
        { heading: 'Sorted array + target pair', desc: 'Two pointers from both ends', signal: '→ sort + l,r' },
        { heading: 'Subarray / Substring', desc: 'Sliding window or prefix sum', signal: '→ window [l..r]' },
        { heading: 'Find min/max feasible value', desc: 'Binary search on the answer space', signal: '→ BS + check(mid)' },
        { heading: 'Top K elements', desc: 'Min-heap of size K', signal: '→ priority_queue' },
        { heading: 'Repeated overlapping subproblems', desc: 'Memoization → Tabulation', signal: '→ DP' },
        { heading: 'All combinations / subsets', desc: 'Backtracking with include/exclude', signal: '→ DFS + undo' },
        { heading: 'Next greater / smaller', desc: 'Monotonic stack', signal: '→ stack' },
        { heading: 'Shortest path unweighted', desc: 'BFS (guarantees shortest)', signal: '→ queue BFS' },
        { heading: 'Shortest path weighted', desc: 'Dijkstra (non-neg) / Bellman-Ford', signal: '→ min-heap' },
        { heading: 'Cycle in graph', desc: 'DFS + recursion stack (directed) / Union-Find (undirected)', signal: '→ visited + inStack' },
        { heading: 'Dependency ordering', desc: 'Topological sort (Kahn\'s / DFS)', signal: '→ topo sort' },
        { heading: 'Frequency / count lookups', desc: 'HashMap / unordered_map', signal: '→ hash O(1)' },
        { heading: 'Range queries on array', desc: 'Prefix sum / Segment tree', signal: '→ pre[r]-pre[l-1]' },
        { heading: 'Matrix / Grid paths', desc: 'BFS shortest, DFS all paths', signal: '→ 4-dir dr/dc arrays' },
        { heading: 'Maximize local choice globally', desc: 'Greedy — prove exchange argument', signal: '→ sort + pick greedily' },
        { heading: 'Parentheses / brackets balance', desc: 'Stack push/pop', signal: '→ stack' },
      ],
    },

    complexity: {
      num: '16',
      title: 'Time Complexity Quick Ref',
      layout: 'table',
      rows: [
        { algo: 'Binary Search', time: 'O(log n)', space: 'O(1)', notes: 'Sorted array', timeClass: 'ologn', spaceClass: 'on' },
        { algo: 'Merge Sort', time: 'O(n log n)', space: 'O(n)', notes: 'Stable, great for linked list', timeClass: 'onlogn', spaceClass: 'on2' },
        { algo: 'Quick Sort', time: 'O(n log n) avg', space: 'O(log n)', notes: 'O(n²) worst', timeClass: 'onlogn', spaceClass: 'ologn' },
        { algo: 'Heap Sort', time: 'O(n log n)', space: 'O(1)', notes: 'Not cache-friendly', timeClass: 'onlogn', spaceClass: 'on' },
        { algo: 'BFS / DFS', time: 'O(V+E)', space: 'O(V)', notes: 'Graph traversal', timeClass: 'on', spaceClass: 'on' },
        { algo: 'Dijkstra (heap)', time: 'O((V+E) log V)', space: 'O(V)', notes: 'Non-negative weights', timeClass: 'onlogn', spaceClass: 'on' },
        { algo: 'Bellman-Ford', time: 'O(VE)', space: 'O(V)', notes: 'Negative weights ok', timeClass: 'on2c', spaceClass: 'on' },
        { algo: 'Floyd-Warshall', time: 'O(V³)', space: 'O(V²)', notes: 'All-pairs shortest path', timeClass: 'on2c', spaceClass: 'on2c' },
        { algo: 'HashMap ops', time: 'O(1) avg', space: 'O(n)', notes: 'O(n) worst collision', timeClass: 'on', spaceClass: 'on' },
        { algo: 'Heap insert/delete', time: 'O(log n)', space: 'O(n)', notes: 'Priority queue', timeClass: 'ologn', spaceClass: 'on' },
        { algo: 'Build Heap', time: 'O(n)', space: 'O(1)', notes: 'Not n log n!', timeClass: 'on', spaceClass: 'on' },
        { algo: 'Trie insert/search', time: 'O(L)', space: 'O(alphabet * L)', notes: 'L = word length', timeClass: 'on', spaceClass: 'on2c' },
        { algo: 'Union-Find ops', time: 'O(α(n)) ≈ O(1)', space: 'O(n)', notes: 'With path compression', timeClass: 'on', spaceClass: 'on' },
        { algo: 'Backtracking (subsets)', time: 'O(2^n)', space: 'O(n)', notes: 'Pruning helps', timeClass: 'on2c', spaceClass: 'on' },
        { algo: 'Backtracking (perms)', time: 'O(n!)', space: 'O(n)', notes: 'All permutations', timeClass: 'on2c', spaceClass: 'on' },
        { algo: 'KMP String Match', time: 'O(n+m)', space: 'O(m)', notes: 'vs O(nm) brute', timeClass: 'on', spaceClass: 'on2' },
      ],
    },

    footer: {
      gameplan: [
        '1. Read problem fully. Note constraints (n ≤ 10⁵ → O(n log n) or better; n ≤ 10³ → O(n²) ok)',
        '2. Brute force it mentally first. Write pseudocode.',
        '3. Look for pattern: sorted? → BS/2ptr. Substring? → Window. Count? → HashMap. All? → Backtrack. Optimal? → DP/Greedy.',
        '4. Code brute if optimal not obvious. Partial marks > no submission.',
        '5. Edge cases: empty input, n=1, all same elements, INT overflow (use long long).',
      ],
      credit: 'You\'ve got this.',
      event: 'Give your ultimate best',
    },
  },
};
