/**
 * 
 */
/**
 * 
 */

import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;

public class code {


public void setToTeacher(String currentTeacher) {
	File teacher = new File ("teachers.txt");
	try{
		PrintWriter output = new PrintWriter(teacher);
		output.println(currentTeacher);
		output.close();
	}catch(IOException ex) {
		
	}
}
}