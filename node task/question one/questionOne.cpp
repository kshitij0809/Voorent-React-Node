#include <iostream>
#include <stdio.h>
#include <algorithm>
#include <cmath>
#include <vector>
#include <cstdlib>
#include <utility>
#include <memory.h>
#include <cassert>
#include <iterator>
#include <bitset>
#include <iomanip>
#include <complex>
#include <queue>
#include <ctime>
#include <deque>
#include <stack>
#include <set>
#include <map>
 
using namespace std;
 
#define pb push_back
#define mp make_pair


void solve(int n) {
	vector<int> v;
	while (n > 0) {
		int c = (n % 10);
		if (c > 4 ) {
			--c;
		}
		v.pb(c);
		n /= 10;
	}
	long long st = 1LL;
	long long ret = 0LL;
	for (int i = 0; i < (int)v.size(); i++) {
		ret = ret + 1LL * v[i] * st;
		st = st * 9LL;
	}
	cout << ret << endl;
}
int main() {
	
		int n;
		scanf("%d", &n);
		solve(n);
		return 0;
}