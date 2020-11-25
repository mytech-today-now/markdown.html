using System;
namespace Example1 {
	class Program {
		public static void value(int num) {
			num++;
		}
		public static void reference(ref int num) {
			num++;
		}
		static void Main(string[] args) {
			int num;
			Console.Write("Enter a number:\t");
			num = Convert.ToInt32(Console.ReadLine());
			Console.WriteLine("\n\n\tValue Type");
			Console.WriteLine("----------------");
			Console.Write("\nPrevious Value:\t{0}", num);
			Program.value(num);
			Console.Write("\nCurrent Value:\t{0}", num);
			Console.WriteLine("\n\n\n----------------");
			Console.WriteLine("\tReference Type");
			Console.WriteLine("--------------------");
			Console.Write("\nPrevious Value:\t{0}", num);
			Program.reference(ref num);
			Console.Write("\nCurrent Value:\t{0}", num);
			Console.ReadLine();
		}
	}
}