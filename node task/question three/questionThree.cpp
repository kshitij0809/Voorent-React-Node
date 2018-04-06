#include <iostream>
#include <fstream>
#include <iostream>
#include <iterator>
#include <string>
#include <regex>
using namespace std;

int main () {
  try
  {
    ifstream infile; 
    infile.open("development.log");

    string s = null;   

   cout << "Reading from the file" << endl; 
   infile >> data;    

        while((s=data)!=-1){    
        int Count = permutations(s);
        cout<<"SprintsController => show action ran"<<Count<<"times";
        }

        infile.close(); 
  }
  catch (int e)
  {
    cout << "An exception occurred. Exception " << e << '\n';
  }
  return 0;
}

 int permutations(string s) {
       
        string s ("Processing by SprintsController#show as JSONAPI");
        regex e ("(Processing by SprintsCont)(.*) (.*) (.*)");

        smatch sm;    
        regex_match (s,sm,e);
        
        return sm.size();
        
}  







 