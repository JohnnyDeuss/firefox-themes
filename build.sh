#! env bash
mkdir -p build/
for theme in blue default orange; do
  rm "build/$theme.zip" 2> /dev/null
  (cd "themes/$theme"; zip -r "../../build/$theme.zip" *)
done
