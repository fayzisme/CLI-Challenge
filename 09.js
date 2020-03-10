const program = require('caporal');
const path = require('path');
const XLSX = require('xlsx');
const fs = require('fs');

const convert = (from, to) => {
  if(path.extname(from)==='.xlsx' && path.extname(to)==='.csv' || path.extname(from)==='.csv' && path.extname(to)==='.xlsx'){
    const workbook = XLSX.readFile(from);
    const sheet_name_list = workbook.SheetNames;
    const output_file_name = to;
    const stream = XLSX.stream.to_csv(workbook.Sheets[sheet_name_list[0]]);
    stream.pipe(fs.createWriteStream(output_file_name));
  }
  else{
    console.log("Tidak bisa convert file selain xlsx dan csv");
  }
}

program
  .command('convert')
  .argument('<file1>')
  .argument('<file2>')
  .action((args)=>{
    convert(args.file1, args.file2);
  });

program.parse(process.argv);