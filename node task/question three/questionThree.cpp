


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
        Pattern pattern = Pattern.compile("Processing by SprintsController#show as JSONAPI");
        Matcher matcher = pattern.matcher(s);
          
        const char cstr[] = "subject";
        std::string s ("subject");
        std::regex e ("(sub)(.*)");

        std::smatch sm;    // same as std::match_results<string::const_iterator> sm;
        std::regex_match (s,sm,e);
        std::cout << "string object with " << sm.size() << " matches\n";



        int count = 0;
        while (matcher.find()){
        {
          count++;
        }
        return count++;
     }
}  







 