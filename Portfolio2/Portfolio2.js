
                // Simple typing rotator
(function(){
    const words = ['Web Developer',   'Software Developer', 'Web       Designer', 'Udemy Student', 'Creator'];
     const wordEl = document.querySelector('.typing-text .word');
    const cursorEl = document.querySelector('.typing-text .cursor');
 let idx = 0, charIndex = 0, forward = true;

 function tick() {
    const current = words[idx];
         if (forward) {
             charIndex++;
           wordEl.textContent = current.slice(0, charIndex);
         if (charIndex === current.length) {
              forward = false;
                                setTout(tick, 1000);
                                return;
                            }
                        } else {
                            charIndex--;
                            wordEl.textContent = current.slice(0, charIndex);
                            if (charIndex === 0) {
                                forward = true;
                                idx = (idx + 1) % words.length;
                            }
                        }
                        setTimeout(tick, forward ? 120 : 60);
                    }

                    if (wordEl) tick();
                })();