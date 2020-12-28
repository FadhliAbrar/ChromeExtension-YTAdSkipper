let skip_button = (kelas) =>{
	let some = document.getElementsByClassName(kelas);
	for(const i of some){
        i.click();
        console.log('ADS SKIPPED');
    }
};

setInterval(()=>{
  skip_button("ytp-ad-skip-button-text");
  skip_button("ytp-ad-overlay-close-button");
},1000);