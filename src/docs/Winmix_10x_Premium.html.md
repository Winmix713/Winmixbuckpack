<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#08080a">
  <title>Winmix — Virtual Football Analytics</title>
  <meta name="description" content="Virtual football analytics in one workspace. Explore simulated fixtures, club form, lineups, league tables and match statistics with Winmix.">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='12' fill='%23130d20'/%3E%3Cpath d='m8 13 6 15 6-11 6 11 6-15' fill='none' stroke='%23c084fc' stroke-width='3' stroke-linejoin='round'/%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root{--base:#08080a;--surface:rgba(255,255,255,.05);--stroke:rgba(255,255,255,.10);--text:#f8fafc;--muted:#919097;--purple:#a855f7;--emerald:#34d399;color-scheme:dark;font-family:Inter,Arial,sans-serif;font-synthesis:none;font-weight:400}{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:105px}body{margin:0;background:var(--base);color:var(--text);font-size:16px;overflow-x:clip}button,input,select{font:inherit}button,a,input,select{-webkit-tap-highlight-color:transparent}button,a{touch-action:manipulation}a{color:inherit;text-decoration:none}button{color:inherit;cursor:pointer}button,input,select{outline-offset:5px}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid #c084fc;outline-offset:5px}button{border:0}::selection{background:#a855f766}button:disabled{cursor:default}button svg,[data-icon] svg{width:18px;height:18px;display:block;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}.sr-only,.skip-link:not(:focus){position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.skip-link:focus{position:fixed;top:20px;left:20px;padding:12px;background:#fff;color:#000;z-index:1000}.page-rails{position:absolute;inset:0 38px;pointer-events:none;border-inline:1px solid rgba(255,255,255,.055);z-index:3;max-width:1600px;margin:auto}body:before{content:"";position:fixed;inset:0;pointer-events:none;z-index:2;opacity:.3;background:repeating-linear-gradient(130deg,transparent 0 6px,rgba(255,255,255,.025) 6px 7px)}.site-header{position:sticky;top:0;z-index:50;background:rgba(8,8,10,.7);backdrop-filter:blur(25px);border-bottom:1px solid var(--stroke)}.nav-inner{height:78px;max-width:1440px;padding:0 65px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center;gap:10px;font-weight:600;letter-spacing:-.8px;font-size:21px;white-space:nowrap}.brand-icon{display:grid;place-items:center;font-size:20px;letter-spacing:-2px;font-weight:700;width:32px;height:32px;border:1px solid #a855f76e;border-radius:10px;background:linear-gradient(135deg,#a855f721,#a855f707);padding-right:2px}.brand-period{font-size:11px;align-self:flex-start;margin:3px 0 0 -6px;color:#8b8993}.nav-links{display:flex;gap:31px;align-items:center}.nav-links a{font-size:14px;color:#a5a3ac;transition:color .2s}.nav-links a:hover{color:white}.button{display:inline-flex;justify-content:center;align-items:center;gap:13px;white-space:nowrap;border:1px solid var(--stroke);font-size:14px;font-weight:500;padding:14px 22px;border-radius:9px;transition:background .2s,border-color .2s,transform .2s}.button:hover{transform:translateY(-2px)}.button>span:last-child:not(.button-time){font-size:19px}.nav-cta{background:#ffffff0a;padding:10px 16px;font-size:13px;box-shadow:inset 0 1px 0 #ffffff0c}.nav-cta:hover,.secondary:hover{background:#ffffff12;border-color:#ffffff30}.primary{background:linear-gradient(180deg,#ab5df5,#8b3ee1);border-color:#be7af9b3;box-shadow:inset 0 1px 0 #ffffff33,0 0 24px #a855f720;color:#fff}.primary:hover{background:linear-gradient(180deg,#bc77fc,#994be8);border-color:#d2a4ff}.secondary{background:#ffffff05;border-color:#ffffff1c;color:#dddce3}.menu-button{display:none;background:none;width:36px;height:36px;padding:8px}.menu-button span{display:block;height:1px;margin:6px 0;background:#fff}.hero{position:relative;isolation:isolate;padding-top:42px}.stadium{position:absolute;top:160px;left:0;right:0;height:1020px;z-index:-3;background-size:cover;background-position:center 52%;opacity:.6;filter:blur(1.5px);mask-image:linear-gradient(to bottom,transparent 0%,#000 23%,#000 63%,transparent 100%)}.stadium:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#08080a1a,#08080a88 40%,#08080a88 60%,#08080a1a),linear-gradient(#08080a77,transparent 40%,#08080a66)}.hero:before{content:"";position:absolute;inset:-90px 0 0;z-index:-2;background:radial-gradient(ellipse 550px 460px at 50% 210px,#7c3aed16,transparent 85%),radial-gradient(ellipse 700px 280px at 50% 740px,#a855f724,transparent 75%)}.hero-grid{position:absolute;inset:0 38px auto;height:700px;z-index:-1;background-image:linear-gradient(#ffffff03 1px,transparent 1px),linear-gradient(90deg,#ffffff03 1px,transparent 1px);background-size:120px 120px;mask-image:radial-gradient(ellipse at top,#000,transparent 75%)}.hero-copy{max-width:940px;margin:auto;text-align:center;position:relative}.release-badge{border:1px solid #ffffff13;background:#ffffff03;display:inline-flex;align-items:center;gap:12px;border-radius:30px;padding:6px 11px 6px 6px;font-size:12px;color:#b6b0c0}.release-label{font-size:10px;letter-spacing:.65px;font-weight:600;border:1px solid #c084fc35;padding:4px 7px;border-radius:20px;background:#a855f714;color:#d5b3f8}.hero-monogram{position:relative;width:85px;height:71px;margin:29px auto 25px}.hero-monogram>span{position:absolute;inset:0;border-radius:23px;border:1px solid #d4a3ff95;display:grid;place-items:center;font-size:49px;line-height:1;font-weight:600;letter-spacing:-5px;padding-right:5px;background:linear-gradient(130deg,#7440966b,#0d0812 65%);box-shadow:0 0 0 4px #a855f70f,0 0 50px #a855f72a,inset 0 1px 3px #f6e3ff30}.bracket{position:absolute;display:block;width:9px;height:9px;border-color:#c9affc55;border-style:solid}.tl{top:-12px;left:-12px;border-width:1px 0 0 1px}.tr{top:-12px;right:-12px;border-width:1px 1px 0 0}.bl{bottom:-12px;left:-12px;border-width:0 0 1px 1px}.br{bottom:-12px;right:-12px;border-width:0 1px 1px 0}.monogram-orbit{position:absolute;height:1px;width:300px;top:35px;left:-108px;background:linear-gradient(90deg,transparent,#a855f715,transparent);z-index:-1}h1{font-size:clamp(58px,5.4vw,82px);line-height:1.02;letter-spacing:-4.5px;font-weight:500;margin:0}.word-mask{display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:.12em;margin-bottom:-.12em}[data-word]{display:inline-block}.soft-word{background:linear-gradient(180deg,#f4e6ff 5%,#9c83b9 100%);-webkit-background-clip:text;background-clip:text;color:transparent}.hero-description{font-size:16px;line-height:1.75;font-weight:400;color:#aaa6b1;margin:21px auto 0;max-width:610px}.hero-actions{display:flex;justify-content:center;gap:12px;margin:25px 0 0}.play-outline{font-size:21px}.button-time{font-size:11px;color:#77737f;border-left:1px solid var(--stroke);padding-left:12px;margin-left:3px}.social-proof{margin-top:30px}.proof-caption{display:flex;align-items:center;justify-content:center;gap:12px;color:#8e8b96;font-size:12px}.avatar-stack{display:flex;padding-left:8px}.avatar{display:grid;place-items:center;border:2px solid #1c1920;border-radius:50%;font-size:10px;letter-spacing:-.2px;font-weight:500;color:#f6f2fa;flex-shrink:0;width:33px;height:33px}.avatar-stack .avatar{margin-left:-8px;width:26px;height:26px;font-size:8px}.a1{background:linear-gradient(135deg,#b2b991,#394735)}.a2{background:linear-gradient(135deg,#cc9479,#634948)}.a3{background:linear-gradient(135deg,#92a4c4,#45455f)}.a4{background:linear-gradient(135deg,#b3a3c9,#584366)}.review-badges{display:flex;justify-content:center;gap:25px;margin-top:15px;font-size:12px;color:#9b97a3}.review-badges>span{display:flex;align-items:center;gap:6px}.review-badges strong{font-weight:500;color:#dfdce3}.review-badges b{margin-right:2px;font-size:16px}.google-g{color:#e2e0e8}.trust-star{color:#34d399}.review-badges .g2-mark{font-size:11px;border-radius:50%;background:#f06445;color:#fff;display:grid;place-items:center;width:16px;height:16px}.studio-stage{position:relative;max-width:1100px;margin:45px auto 0;scroll-margin-top:100px}.stage-label{display:flex;justify-content:space-between;align-items:center;margin:0 3px 14px;font-size:10px;letter-spacing:1.3px;color:#90869c}.stage-label>span:first-child{display:flex;align-items:center;gap:8px}.stage-label i{width:5px;height:5px;border-radius:100%;background:#bf94e9}.dashboard-shell{position:relative;border-radius:18px;border:1px solid #ffffff30;padding:7px;background:linear-gradient(130deg,#f2e4ff23,#ffffff05 35%,#b990fa23);backdrop-filter:blur(25px)}.dashboard-shell:before{content:"";position:absolute;left:12%;right:12%;height:1px;top:-1px;background:linear-gradient(90deg,transparent,#d8bcff,#fff,#a855f7,transparent)}.dashboard-shell:after{content:"";pointer-events:none;position:absolute;inset:20% -1px 30% auto;width:1px;background:linear-gradient(transparent,#a855f7,transparent)}.dashboard{position:relative;display:flex;background:#0c0b10eF;overflow:hidden;border:1px solid #ffffff0f;border-radius:11px;min-height:550px}.sidebar{display:flex;flex-direction:column;width:205px;flex-shrink:0;padding:21px 12px 16px;border-right:1px solid #ffffff0c;background:linear-gradient(140deg,#30283b33,#100f1466 70%)}.workspace-brand{display:flex;align-items:center;gap:9px;font-size:12px;font-weight:500;padding:0 3px 24px}.workspace-icon{background:#a855f71f;border:1px solid #a855f750;border-radius:9px;width:30px;height:32px;display:grid;place-items:center;color:#d2abff}.workspace-brand small{display:block;color:#797380;font-size:10px;margin-top:4px;font-weight:400}.workspace-chevron{margin-left:auto;color:#88818f}.sidebar-label{font-size:9px;font-weight:500;letter-spacing:1.3px;color:#6c6675;padding:0 10px 10px}.side-item{display:flex;align-items:center;gap:10px;border-radius:6px;background:transparent;color:#9a94a4;padding:10px;font-size:12px;text-align:left;margin:1px 0;transition:background .2s,color .2s;min-height:37px}.side-item [data-icon] svg{width:15px;height:15px}.side-item:hover{background:#ffffff06;color:#d6cddd}.side-item.selected{background:#a855f718;color:#d9b5fa;border:1px solid #a855f723;padding:9px}.item-count{margin-left:auto;font-size:10px;color:#b690df}.sidebar-divider{height:1px;background:#ffffff08;margin:19px 8px}.collection-dot{display:block;width:6px;height:6px;border-radius:2px;margin:0 4px}.purple{background:#a574de}.emerald{background:#3b9f85}.sidebar-bottom{margin-top:auto;padding-top:26px}.plan-card{border:1px solid #ffffff0b;border-radius:7px;padding:12px;background:#ffffff02}.plan-card>span:first-child{font-size:11px;color:#a19aa9}.plan-card strong{display:block;font-size:14px;font-weight:500;margin-top:7px}.plan-card small{color:#625b6b;font-size:11px;font-weight:400}.usage-bar{height:3px;background:#ffffff09;margin:11px 0}.usage-bar i{display:block;width:16%;height:100%;background:#b174ec;border-radius:3px}.demo-label{font-size:10px;color:#787080}.user-profile{display:flex;align-items:center;gap:9px;font-size:11px;padding:17px 3px 0}.user-profile .avatar{width:28px;height:28px;font-size:9px}.user-profile small{display:block;font-size:10px;color:#696371;margin-top:4px}.library-content{flex:1;min-width:0;display:flex;flex-direction:column}.library-topline{display:flex;justify-content:space-between;align-items:center;padding:18px 25px 16px;font-size:10px;border-bottom:1px solid #ffffff06;color:#79717f}.breadcrumb-slash{padding:0 10px;color:#4f4759}#breadcrumb-current{color:#b0a7b8}.demo-indicator{font-size:8px;letter-spacing:1px;border:1px solid #ffffff0c;padding:4px 6px;border-radius:4px;color:#726979}.library-heading{display:flex;justify-content:space-between;align-items:center;padding:24px 25px 22px}.library-heading h2{font-size:27px;letter-spacing:-1.15px;font-weight:500;margin:0}.title-dot{color:#be88ff}.library-heading p{font-size:11px;color:#817789;margin:7px 0 0}.small-button{font-size:10px;background:#ffffff06;padding:8px 11px;border-radius:6px;gap:7px}.small-button [data-icon] svg{width:13px;height:13px;color:#c7a6eb}.library-toolbar{padding:0 25px;display:flex;justify-content:space-between;border-bottom:1px solid #ffffff0b;gap:12px}.tabs{display:flex;gap:21px}.tabs button{position:relative;padding:0 0 13px;font-size:11px;background:transparent;color:#82798c;white-space:nowrap}.tabs button[aria-selected=true]{color:#d9c8ec}.tabs button[aria-selected=true]:after{content:"";position:absolute;bottom:-1px;left:0;right:0;background:#ae72eb;height:2px}.tabs button span{font-size:9px;color:#a48ebd;padding:2px 5px;border-radius:4px;margin-left:4px;background:#ad70f017}.library-tools{display:flex;align-items:flex-start;gap:8px;margin-top:-7px}.search-field{display:flex;align-items:center;background:#ffffff03;border:1px solid #ffffff0a;border-radius:5px;padding:7px 8px;gap:6px;color:#72687f}.search-field svg{width:12px;height:12px}.search-field input{min-width:0;width:99px;background:none;border:0;color:#c4b9d0;font-size:10px;outline:none;padding:0}.search-field input::placeholder{color:#716779}.search-field kbd{font:9px Inter;color:#63596e;border:1px solid #ffffff12;border-radius:2px;padding:0 3px}.filter-button{padding:7px;border:1px solid #ffffff0a;background:#ffffff03;border-radius:5px;color:#9687a7}.filter-button svg{width:13px;height:13px}.filter-button[aria-expanded=true]{background:#a855f724;color:#d7b2fb}.filter-panel{display:flex;align-items:end;gap:15px;padding:12px 25px;border-bottom:1px solid #ffffff12;background:#a855f709;font-size:12px}.filter-panel label{display:grid;gap:5px;color:#a497b3}.filter-panel select{background:#1d1625;border:1px solid #ffffff1a;padding:6px;border-radius:5px;color:#ddd2ea;font-size:12px}.filter-panel button{background:none;font-size:12px;color:#c7a0ef;padding:7px;margin-left:auto}.track-panel{flex:1}.track-table{width:100%;border-collapse:collapse;text-align:left}.track-table th{font-size:8px;color:#72657f;letter-spacing:1.4px;font-weight:400;height:37px}.track-table td{font-size:10px;color:#91839f;border-top:1px solid #ffffff04;padding-block:8px}.number-col{width:45px;text-align:center}.track-table th.number-col{padding-left:10px}.track-table th.duration-col svg{width:11px;height:11px}.date-col{width:118px}.duration-col{width:59px}.visibility-col{width:82px}.favorite-col{width:43px}.track-table tr{transition:background .2s}.track-table tbody tr:hover{background:#ffffff035}.track-table tbody tr.active-track{background:linear-gradient(90deg,#a855f711,#a855f706)}.track-info{display:flex;align-items:center;gap:10px}.cover{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0;border:1px solid #ffffff14;border-radius:5px;color:#fff8;font-weight:500;font-size:14px;background:#393041;overflow:hidden}.cover-0{background:linear-gradient(140deg,#5c906d,#152c20 45%,#a0ae6b);color:#dcefb0}.cover-1{background:linear-gradient(45deg,#242733,#af9c82 49%,#434355 50%,#272c39)}.cover-2{background:linear-gradient(135deg,#6c326e,#111526 46%,#b45575)}.cover-3{background:linear-gradient(50deg,#d7975d,#4d3044 49%,#1e3246)}.cover-4{background:linear-gradient(140deg,#6474b6,#191c4e 43%,#5fc0be)}.cover-5{background:linear-gradient(55deg,#cc603d,#5c153b 60%,#2c1c49)}.cover-6{background:linear-gradient(135deg,#768679,#23322d 48%,#a7a18f)}.cover-7{background:linear-gradient(135deg,#4f2758,#c6a099 50%,#543952)}.track-copy strong{display:block;font-size:11px;font-weight:500;color:#d8cde1}.track-copy small{display:block;font-size:9px;color:#73677f;margin-top:4px}.track-table .active-track .track-copy strong{color:#c8a2ee}.row-play{display:grid;place-items:center;background:none;width:32px;height:30px;padding:8px;margin-left:8px;color:#73667f;font-size:10px}.row-play svg{width:13px;height:13px}.track-table tr:hover .row-play{color:#d3a7ff}.visibility-tag{font-size:8px;border:1px solid #d7b7ff16;background:#b482e311;color:#aa8cc5;padding:3px 6px;border-radius:4px}.visibility-tag.public{color:#64b79c;background:#10b98111;border-color:#10b98115}.favorite-button,.player-heart{background:none;padding:6px;color:#5e506e}.favorite-button svg{width:12px;height:12px}.favorite-button[aria-pressed=true],.player-heart[aria-pressed=true]{color:#bb83ed}.favorite-button[aria-pressed=true] svg,.player-heart[aria-pressed=true] svg{fill:#a855f755}.player{border-top:1px solid #ffffff10;display:flex;align-items:center;gap:15px;padding:13px 20px;background:linear-gradient(110deg,#a855f710,#ffffff02)}.now-playing{display:flex;align-items:center;gap:9px;min-width:180px}.now-playing .cover{width:30px;height:30px}.now-playing strong{font-size:10px;display:block;font-weight:500;color:#d6c9e2}.now-playing small{font-size:8px;display:block;margin-top:4px;color:#7d6d8e}.player-heart svg{width:12px;height:12px}.playback{display:flex;align-items:center;gap:10px;flex:1;font-size:8px;color:#6d5c82}.transport,.volume-button{background:none;color:#8e7c9f;padding:3px}.transport svg,.volume-button svg{width:12px;height:12px}.main-play{display:grid;place-items:center;background:#e9d6fc;width:25px;height:25px;border-radius:50%;padding:7px;color:#22152d;flex-shrink:0}.main-play svg{width:11px;height:11px}.playback input{width:100%;min-width:30px;height:3px;accent-color:#b281e3;cursor:pointer}.volume-button{margin-left:12px}.stage-footer{display:flex;align-items:center;justify-content:space-between;padding:16px 4px;color:#7c708b;font-size:10px}.stage-footer>span{display:flex;align-items:center;gap:8px}.stage-footer svg{width:13px;height:13px}.stage-footer>span:last-child{font-size:8px;letter-spacing:1.1px}.floating-card{position:absolute;z-index:4;border:1px solid #ffffff26;background:linear-gradient(130deg,#29212cbb,#17141be8);backdrop-filter:blur(30px);border-radius:10px}.collaborator-card{width:231px;left:-118px;top:100px;padding:14px;transform:rotate(-5deg)}.floating-person{display:flex;align-items:center;gap:9px}.floating-person strong{font-size:11px;font-weight:500;display:block}.floating-person>div>span{font-size:9px;color:#9a8e9e;display:block;margin-top:3px}.online-dot{width:5px;height:5px;border-radius:50%;background:#55c7a1;margin-left:auto}.collaborator-card p{font-size:11px;line-height:1.6;color:#c3b8ca;margin:13px 0}.comment-file{display:flex;align-items:center;gap:6px;font-size:9px;color:#a18bab;background:#0c081b40;padding:8px;border-radius:5px}.approval{font-size:8px;color:#7bc5a2;margin-left:auto}.activity-card{width:185px;right:-92px;top:280px;padding:16px;transform:rotate(6deg);background:linear-gradient(140deg,#302139c9,#151218ed)}.activity-heading{display:flex;align-items:center;gap:6px;font-size:9px;color:#b9a4c8}.mini-spark{font-size:16px;color:#cb93ff}.activity-card>strong{display:block;font-size:23px;line-height:1.25;font-weight:400;letter-spacing:-.8px;margin:17px 0}.activity-card em{font-style:normal;color:#bf8df1}.activity-bars{height:35px;display:flex;align-items:center;gap:3px;margin:0 0 12px}.activity-bars i{width:3px;border-radius:2px;background:linear-gradient(#d4a7ff,#64358e)}.activity-foot{font-size:7px;letter-spacing:.65px;color:#766484}.section-frame{max-width:1220px;margin-inline:auto}.features{padding:90px 25px 75px;position:relative}.section-heading{display:flex;justify-content:space-between;align-items:end;margin-bottom:43px}.eyebrow{font-size:10px;letter-spacing:1.6px;color:#a18cab;font-weight:500}.section-heading h2{font-size:43px;line-height:1.15;letter-spacing:-1.8px;font-weight:400;margin:17px 0 0}.section-heading h2 span{color:#7f778c}.section-heading>p{font-size:14px;line-height:1.8;color:#8c8197;margin:0 0 3px}.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid #ffffff10;position:relative}.feature-grid:before,.feature-grid:after{content:"";position:absolute;width:8px;height:8px;border:1px solid #c2a4e766;pointer-events:none}.feature-grid:before{left:-1px;top:-1px;border-bottom:0;border-right:0}.feature-grid:after{right:-1px;bottom:-1px;border-top:0;border-left:0}.feature-card{min-width:0;padding:26px 28px 27px;background:radial-gradient(ellipse at 50% 0%,#a855f707,transparent 65%);transition:background .3s}.feature-card+.feature-card{border-left:1px solid #ffffff10}.feature-card:hover{background-color:#a855f708}.feature-number{display:flex;justify-content:space-between;align-items:center;color:#706579;font-size:10px}.feature-number svg{width:18px;height:18px;color:#af93c6}.feature-art{height:115px;margin:20px 0 23px;display:flex;align-items:center;justify-content:center;position:relative}.waveform-art{gap:5px;mask-image:linear-gradient(90deg,transparent,#000 20%,#000 80%,transparent)}.waveform-art i{width:3px;border-radius:4px;background:linear-gradient(#c8a0ef,#463252);transition:transform .3s}.feature-card:hover .waveform-art i:nth-child(3n){transform:scaleY(1.35)}.feature-card h3{font-size:18px;letter-spacing:-.5px;font-weight:500;margin:0 0 12px}.feature-card p{font-size:14px;line-height:1.8;color:#887d93;margin:0;max-width:300px}.feature-card a{display:flex;align-items:center;gap:15px;font-size:12px;color:#b3a2c4;margin-top:28px}.feature-card a span{transition:transform .2s}.feature-card a:hover span{transform:translate(2px,-2px)}.collection-art{flex-direction:column;gap:8px;transform:rotate(-4deg)}.collection-art>div{display:flex;align-items:center;width:235px;max-width:100%;padding:13px 12px;background:linear-gradient(135deg,#21182a,#0c0b10);border:1px solid #ad81d32b;border-radius:7px;font-size:11px;color:#b5a5c4;gap:7px}.collection-art>div+div{margin-left:20px;opacity:.65}.collection-art>div>span:last-child{margin-left:auto;font-size:9px;color:#705e81}.team-art .avatar{width:39px;height:39px;border:1px solid #fff3;font-size:11px}.team-line{height:1px;width:25px;background:linear-gradient(90deg,#775390,#77539033);margin:0 6px}.team-check{display:grid;place-items:center;width:28px;height:28px;border:1px solid #6b3d914d;border-radius:50%;color:#b185d7;background:#a855f712}.team-art small{position:absolute;bottom:4px;font-size:10px;color:#776284}.closing{position:relative;display:flex;justify-content:space-between;align-items:center;margin-bottom:68px;padding:48px 55px;background:radial-gradient(ellipse at 30% 120%,#a855f719,transparent 65%);border:1px solid #ffffff10}.closing h2{font-size:35px;letter-spacing:-1.2px;line-height:1.2;font-weight:400;margin:15px 0 0}.closing .tl{top:-1px;left:-1px}.closing .br{bottom:-1px;right:-1px}.site-footer{display:flex;justify-content:space-between;align-items:center;max-width:1350px;margin:auto;padding:24px 38px 35px;border-top:1px solid #ffffff0c;font-size:11px;color:#6e627d}.site-footer .brand{font-size:17px;color:#9e92aa}.site-footer .brand-icon{width:27px;height:27px;font-size:17px}.tour-dialog{color:#f2e9fa;background:radial-gradient(at 50% 30%,#46285c,#151018 70%);border:1px solid #7c5a91;border-radius:18px;padding:35px;width:min(92vw,520px);max-height:90vh;overflow:auto}.tour-dialog::backdrop{background:#08080acc;backdrop-filter:blur(12px)}.dialog-close{position:absolute;right:14px;top:8px;background:none;font-size:28px;color:#a794b7;padding:8px}.tour-dialog h2{font-size:30px;letter-spacing:-1px;font-weight:500}.tour-dialog p{font-size:15px;line-height:1.8;color:#b3a2c0}.tour-visual{display:flex;align-items:center;justify-content:center;gap:10px;height:160px;margin-top:25px;font-size:55px;color:#c692f4}.tour-visual .cover{height:90px;width:90px;font-size:35px;border-radius:16px;transform:rotate(-8deg)}.tour-visual .cover+ .cover{transform:rotate(8deg);margin-left:-20px;margin-top:30px}.tour-bottom{display:flex;justify-content:space-between;align-items:center;margin-top:28px}.tour-dots{display:flex;gap:6px}.tour-dots i{width:6px;height:6px;background:#584267;border-radius:50%}.tour-dots i.active{width:20px;border-radius:4px;background:#c191eb}.toast{position:fixed;bottom:24px;left:50%;transform:translate(-50%,15px);border:1px solid #a855f754;background:#20142cef;color:#dec8f0;border-radius:9px;padding:13px 20px;font-size:13px;z-index:100;opacity:0;transition:.25s;pointer-events:none}.toast.visible{opacity:1;transform:translate(-50%,0)}.empty-state{padding:45px 25px;text-align:center;color:#a08daf}.empty-state>span{display:flex;justify-content:center}.empty-state strong{display:block;color:#ded0ea;font-size:18px;margin-top:18px}.empty-state p{font-size:14px}.empty-state button{margin-top:7px}[hidden]{display:none!important}
@media(min-width:1500px){.studio-stage{max-width:1160px}.dashboard{min-height:575px}.track-table td{padding-block:10px}.hero{padding-top:51px}.hero-description{font-size:17px}}
@media(max-width:1350px){.studio-stage{max-width:calc(100% - 190px)}.collaborator-card{left:-67px;top:72px;width:205px}.activity-card{right:-63px;width:160px;top:334px}.activity-card>strong{font-size:20px}.sidebar{width:182px}.stage-label>span:last-child{display:none}.nav-inner{padding-inline:55px}.features{padding-inline:55px}.closing{margin-inline:55px}.date-col{width:96px}.duration-col{width:46px}.library-toolbar{gap:10px}.tabs{gap:13px}}
@media(max-width:1100px){.nav-links{gap:22px}.nav-inner{padding-inline:35px}.studio-stage{max-width:calc(100% - 100px)}.floating-card{display:none}.sidebar{width:170px}.library-topline,.library-heading{padding-inline:20px}.library-toolbar{padding-inline:20px}.search-field{width:120px}.search-field input{width:80px}.search-field kbd{display:none}.stage-footer{padding-inline:5px}.date-col{display:none}.track-table td.date-cell{display:none}.features{padding-inline:50px}.feature-card{padding-inline:22px}.feature-card h3{font-size:16px}.feature-card p{font-size:13px}.closing{margin-inline:50px;padding-inline:35px}.page-rails{inset-inline:22px}.player{gap:8px;padding-inline:13px}.now-playing{min-width:165px}.playback{gap:7px}.volume-button{margin-left:3px}}
@media(max-width:800px){.nav-links{display:none;position:absolute;inset:77px 0 auto;padding:25px 30px;flex-direction:column;background:#100d16f7;border-bottom:1px solid #ffffff20;backdrop-filter:blur(25px)}.nav-links.open{display:flex;align-items:start}.menu-button{display:block;margin-left:-14px}.nav-inner{height:70px;padding-inline:25px;gap:20px}.nav-cta{margin-left:auto;font-size:12px;padding:8px 12px}.brand{font-size:19px}.hero{padding-top:35px}.hero-copy{padding-inline:22px}h1{font-size:70px;letter-spacing:-3.5px}.hero-description{font-size:15px}.hero-monogram{margin-top:30px}.studio-stage{max-width:calc(100% - 50px);margin-top:38px}.sidebar{width:160px;padding-inline:8px}.library-heading h2{font-size:24px}.library-heading p{font-size:10px}.library-heading .small-button{font-size:0;gap:0;padding:8px}.library-heading .small-button svg{width:15px;height:15px}.search-field{width:30px;padding:7px}.search-field:focus-within{width:130px}.search-field input{width:0}.search-field:focus-within input{width:92px}.library-toolbar:focus-within .tabs{gap:10px}.now-playing{min-width:130px}.now-playing .player-heart{display:none}.playback input,.playback #elapsed-time,.volume-button{display:none}.playback{justify-content:end}.stage-label{font-size:9px}.features{padding:70px 25px 50px}.section-heading h2{font-size:36px}.section-heading>p{font-size:12px}.feature-card{padding:20px 16px}.feature-card h3{font-size:15px}.feature-card p{font-size:12px}.feature-card a{font-size:10px}.feature-art{height:95px;margin-block:15px}.team-art .avatar{width:30px;height:30px;font-size:8px}.team-line{width:8px;margin-inline:3px}.team-art small{font-size:8px}.collection-art>div{font-size:9px;padding:10px 7px}.collection-art>div+div{margin-left:10px}.closing{margin-inline:25px;padding:32px}.closing h2{font-size:29px}.closing .button{padding-inline:15px;font-size:12px}.site-footer{padding-inline:25px}.site-footer>span:first-of-type{display:none}.page-rails{inset-inline:12px}.nav-links{top:69px}}
@media(max-width:600px){.nav-inner{padding-inline:20px;height:66px;gap:13px}.brand{font-size:18px;gap:8px}.brand-icon{width:27px;height:28px;font-size:18px}.brand-period{display:none}.nav-cta{font-size:11px;padding:8px 10px;gap:5px}.nav-cta>span:last-child{font-size:15px}.menu-button{margin-left:0;width:30px;padding:4px}.nav-links{top:65px}.release-badge{font-size:10px;gap:7px}.release-label{font-size:8px;letter-spacing:.3px;padding:4px 6px}.hero{padding-top:30px}.hero-monogram{width:72px;height:63px;margin-block:29px 23px}.hero-monogram>span{font-size:41px;border-radius:19px}h1{font-size:62px;letter-spacing:-3.4px}.hero-description{font-size:14px;line-height:1.8;max-width:350px}.desktop-break{display:none}.hero-actions{gap:9px;margin-top:23px}.hero-actions .button{padding:12px 15px;font-size:12px;gap:7px}.button-time{display:none}.social-proof{margin-top:24px}.proof-caption{font-size:10px;gap:7px}.review-badges{gap:19px;font-size:10px;margin-top:15px}.review-badges>span{gap:4px}.review-badges b{font-size:14px}.studio-stage{max-width:calc(100% - 32px);margin-top:35px}.stage-label{font-size:8px;letter-spacing:.8px;margin-bottom:12px}.dashboard-shell{padding:4px;border-radius:13px}.dashboard{border-radius:8px;min-height:0}.sidebar{display:none}.library-topline{padding:13px 14px;font-size:9px}.demo-indicator{font-size:7px;letter-spacing:.5px}.library-heading{padding:21px 15px 24px}.library-heading h2{font-size:26px}.library-heading p{font-size:10px;margin-top:6px}.library-toolbar{padding-inline:15px;gap:10px}.tabs{gap:17px}.tabs button{font-size:10px}.library-tools{gap:5px}.filter-button{padding:6px}.search-field{padding:6px;width:27px}.search-field:focus-within{width:109px;position:absolute;right:49px;background:#1c1425;z-index:4}.search-field:focus-within input{width:75px}.track-table th{font-size:7px;height:33px;letter-spacing:.7px}.number-col{width:30px}.track-table th.number-col{padding-left:0}.row-play{margin-left:2px;padding:5px;width:25px;font-size:9px}.track-table td{padding-block:9px}.track-copy strong{font-size:11px}.track-copy small{font-size:9px}.cover{width:31px;height:32px;font-size:13px}.track-info{gap:8px}.duration-col{width:37px}.visibility-col{width:56px}.visibility-tag{font-size:7px;padding:3px 4px}.favorite-col{width:27px}.favorite-button{padding:4px}.favorite-button svg{width:12px;height:12px}.player{padding:12px 13px;gap:8px}.now-playing{min-width:0;flex:1}.now-playing strong{font-size:11px}.now-playing small{font-size:8px}.playback{flex:0;gap:11px}.playback #total-time{display:none}.main-play{width:29px;height:29px}.transport svg{width:13px;height:13px}.stage-footer{padding-top:13px;font-size:9px;justify-content:center}.stage-footer>span:last-child{display:none}.stadium{top:285px;height:960px;background-position:center;opacity:.72}.hero:before{background:radial-gradient(ellipse 300px 370px at 50% 190px,#7c3aed1d,transparent 90%)}.features{padding:67px 22px 35px}.section-heading{display:block;margin-bottom:28px}.eyebrow{font-size:8px;letter-spacing:1.3px}.section-heading h2{font-size:37px;letter-spacing:-1.5px;margin-top:13px}.section-heading>p{font-size:13px;line-height:1.7;margin-top:17px}.feature-grid{grid-template-columns:1fr}.feature-card{padding:24px}.feature-card+.feature-card{border-left:0;border-top:1px solid #ffffff10}.feature-number{font-size:10px}.feature-art{height:105px;margin:16px 0 25px}.feature-card h3{font-size:20px}.feature-card p{font-size:14px;max-width:none}.feature-card a{font-size:13px;margin-top:21px}.team-art .avatar{width:40px;height:40px;font-size:11px}.team-line{width:35px;margin-inline:7px}.team-art small{font-size:10px}.collection-art>div{width:250px;font-size:12px;padding:13px}.closing{margin:0 22px 40px;padding:32px 24px;display:block}.closing h2{font-size:29px}.closing .button{font-size:13px;margin-top:25px;padding:13px 19px}.site-footer{padding:20px 22px 30px;font-size:9px}.site-footer .brand{font-size:15px}.site-footer .brand-icon{width:24px;height:24px;font-size:15px}.page-rails{inset-inline:8px}.filter-panel{padding:12px;font-size:11px;gap:8px}.filter-panel select{font-size:11px}.tour-dialog{padding:29px 24px}.tour-dialog h2{font-size:26px}.tour-visual{height:140px}.tour-dialog p{font-size:14px}.toast{width:max-content;max-width:90vw;text-align:center;font-size:12px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto},:before,:after{animation:none!important;transition:none!important}}
/* Final asset and legibility adjustments. */
.stadium{background-image:url('assets/stadium-night.png')}
.sidebar-label{font-size:10px}.side-item{font-size:14px}.workspace-brand{font-size:13px}.workspace-brand small{font-size:11px}.plan-card>span:first-child{font-size:12px}.plan-card small{font-size:12px}.demo-label{font-size:11px}.user-profile{font-size:12px}.user-profile small{font-size:11px}.library-topline{font-size:12px}.demo-indicator{font-size:9px}.library-heading p{font-size:13px}.small-button{font-size:12px}.tabs button{font-size:13px}.search-field input{font-size:12px;width:108px}.search-field{width:155px}.track-table th{font-size:10px;letter-spacing:1px}.track-table td{font-size:12px;padding-block:10px}.track-copy strong{font-size:14px}.track-copy small{font-size:11px}.cover{width:35px;height:36px}.visibility-tag{font-size:10px}.row-play{font-size:11px}.favorite-button svg{width:15px;height:15px}.now-playing strong{font-size:12px}.now-playing small{font-size:10px}.now-playing{min-width:200px}.playback{font-size:10px}.floating-person strong{font-size:12px}.floating-person>div>span{font-size:11px}.collaborator-card p{font-size:12px}.comment-file{font-size:10px}.approval{font-size:9px}.activity-heading{font-size:11px}.activity-foot{font-size:8px}.proof-caption,.review-badges{font-size:12px}.stage-footer{font-size:11px}.hero-monogram{margin-top:25px;margin-bottom:22px}.hero-actions{margin-top:22px}.social-proof{margin-top:25px}.hero-description{margin-top:18px}.studio-stage{margin-top:35px}
@media(min-width:801px){h1 br{display:none}h1{font-size:clamp(60px,5.4vw,82px);letter-spacing:-4px}.hero{padding-top:37px}.hero-monogram{margin-bottom:27px}.hero-description{margin-top:23px}.hero-copy{max-width:1100px}.sidebar{width:218px}.dashboard{min-height:680px}.library-heading{padding-block:23px}.library-toolbar{padding-top:3px}.player{padding-block:15px}.collaborator-card{left:-135px;top:80px;pointer-events:none}.activity-card{right:-100px;top:380px;pointer-events:none}}
@media(max-width:1350px) and (min-width:801px){.sidebar{width:195px}.side-item{font-size:12px}.search-field{width:130px}.search-field input{width:85px}.tabs{gap:14px}.tabs button{font-size:12px}.collaborator-card{left:-110px}.activity-card{right:-78px}.track-copy strong{font-size:13px}.track-copy small{font-size:10px}}
@media(max-width:1100px){.now-playing{min-width:180px}.sidebar{width:185px}.date-col{display:none}.visibility-col{width:76px}}
@media(max-width:800px){.side-item{font-size:12px}.sidebar{width:168px}.search-field{width:30px}.search-field input{width:0}.search-field:focus-within{width:135px}.search-field:focus-within input{width:97px}.tabs{gap:13px}.tabs button{font-size:12px}.now-playing{min-width:145px}.track-copy strong{font-size:12px}.track-copy small{font-size:10px}.small-button{font-size:0}.library-heading p{font-size:11px}.library-heading .small-button{font-size:0}.library-topline{font-size:10px}.track-table th{font-size:9px}}
@media(max-width:600px){.sidebar{display:none}.hero-monogram{margin-top:29px;margin-bottom:23px}.hero-description{margin-top:21px}.proof-caption,.review-badges{font-size:10px}.hero-copy{padding-inline:16px}.track-copy strong{font-size:12px}.track-copy small{font-size:10px}.track-info{gap:7px}.cover{width:32px;height:35px}.visibility-tag{font-size:9px;padding:3px 4px}.visibility-col{width:59px}.track-table td{font-size:10px}.track-table th{font-size:8px}.track-table .duration-col{width:35px}.tabs button{font-size:12px}.tabs{gap:16px}.library-topline{font-size:10px}.demo-indicator{font-size:7px}.library-heading p{font-size:11px}.now-playing{min-width:0}.now-playing strong{font-size:12px}.now-playing small{font-size:10px}.stage-footer{font-size:10px}.search-field{width:27px}.search-field:focus-within{width:120px}.search-field:focus-within input{width:86px}.track-table .row-play{font-size:10px}.feature-card p{font-size:14px}}
@media(min-width:1101px){.collaborator-card{left:-65px;top:-151px;pointer-events:none}.activity-card{right:-52px;top:-191px;pointer-events:none}}
/* Football components inherit the original Wavelength design. */
.dashboard{--ui-scale:1}.side-group summary{list-style:none;cursor:pointer}.side-group summary::-webkit-details-marker{display:none}.side-group{margin-bottom:5px}.side-group[open] summary .workspace-chevron{transform:rotate(180deg)}.side-submenu{padding-inline-start:22px}.side-submenu .side-item{width:100%;min-height:28px;padding-block:6px;font-size:12px}.side-submenu .side-item.selected{padding-block:5px}.sidebar .sidebar-divider{margin-block:12px}.profile-button{background:none;text-align:start;width:100%;padding-inline:0}.sidebar-bottom{padding-top:16px}.header-controls{display:flex;align-items:center;gap:10px}.header-control{display:flex;align-items:center;background:none;color:#9986ac;font-size:10px;padding:2px}.header-control svg{width:13px;height:13px}.header-control[aria-pressed=true]{color:#d8b2ff}.font-control{display:flex;gap:5px;align-items:center;font-size:10px;color:#9986ac}.font-control input{width:42px;accent-color:#b586e4;height:3px}.mobile-view-control{display:none}.match-row-button{width:100%;background:transparent;text-align:start;padding:0;color:inherit;cursor:pointer}.track-info .track-copy{min-width:0;flex:1}.track-copy strong{font-size:calc(13px * var(--ui-scale))}.match-row-button .track-copy small{max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.versus{font-size:10px;color:#796b89;font-weight:400;padding-inline:2px}.badge-pair{display:flex;align-items:center;width:47px;flex-shrink:0}.club-badge{display:inline-grid;place-items:center;width:29px;height:32px;flex-shrink:0;color:#eee4f9;font-size:10px;font-weight:600;border:1px solid #ffffff25;border-radius:8px 8px 11px 11px;line-height:1}.badge-pair .club-badge+.club-badge{margin-inline-start:-10px;margin-top:12px;border-color:#201828}.club-badge.large{width:49px;height:55px;font-size:16px;border-radius:12px 12px 17px 17px}.match-table .score-cell{font-size:calc(13px * var(--ui-scale));font-weight:500;color:#d7c5e5;white-space:nowrap}.match-table .duration-col{width:61px}.match-table .date-col{width:102px}.match-table .visibility-col{width:75px}.match-table .number-col{width:38px}.match-table .row-play{margin-left:3px}.match-table .track-copy strong{display:block;max-width:330px}.match-summary-strip{margin-top:auto}.match-strip-link{background:none;text-align:start;min-width:0;flex:1;color:inherit;padding:0}.match-strip-link>span:last-child{min-width:0}.match-strip-link strong,.match-strip-link small{max-width:290px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.strip-timeline{display:flex;gap:12px;align-items:center;flex:1;color:#aa94bd;font-size:11px;max-width:230px}.strip-timeline strong{white-space:nowrap;color:#d6bceb}.mini-timeline{position:relative;height:3px;flex:1;background:#ffffff10;margin-inline:2px}.timeline-progress{display:block;height:100%;background:#8e5ebe}.timeline-goal{position:absolute;top:50%;transform:translate(-50%,-50%);width:6px;height:6px;background:#d0a2fc;border-radius:50%;border:1px solid #24162f}.timeline-goal.away{background:#64c4a3}.filter-panel input{background:#1d1625;border:1px solid #ffffff1a;border-radius:5px;color:#d5c6e1;font-size:12px;padding:6px;min-width:0}.aux-panel{padding:0 23px 23px;max-height:555px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#564065 transparent;min-width:0;flex:1}.aux-panel h3{font-weight:500;font-size:calc(14px * var(--ui-scale));letter-spacing:-.3px;margin:0 0 13px;color:#d7c9e4}.aux-panel p{font-size:13px;line-height:1.65;color:#92819f;margin:6px 0}.panel-top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:16px}.compact-select{display:flex;align-items:center;gap:9px;font-size:11px;color:#9984aa;min-width:0}.compact-select select,.matchday-strip input,.mobile-view-control select{font:inherit;font-size:12px;max-width:100%;min-width:0;color:#c8b5d8;background:#17121e;border:1px solid #ffffff16;border-radius:6px;padding:8px}.panel-note{font-size:9px;letter-spacing:.9px;color:#7e6b90}.chip-tabs{display:flex;gap:5px;overflow-x:auto;scrollbar-width:thin;scrollbar-color:#584164 transparent;padding-bottom:4px;margin-bottom:12px}.chip-tabs button{flex-shrink:0;font-size:11px;color:#9a85ab;border:1px solid #ffffff0c;border-radius:5px;background:#ffffff03;padding:8px 12px}.chip-tabs button.active{background:#a855f71a;color:#d8b3fc;border-color:#a855f73c}.panel-top .chip-tabs{margin:0}.data-card{background:linear-gradient(140deg,#ffffff035,#ffffff01);border:1px solid #ffffff0e;border-radius:8px;padding:17px;min-width:0;margin-bottom:13px}.analytics-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.analytics-grid .data-card{margin:0}.analytics-grid .wide{grid-column:1/-1}.metric-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:0 0 19px}.metric-strip>div{border-inline-start:1px solid #ffffff12;padding-inline-start:13px}.metric-strip small{font-size:11px;color:#8f7e9f}.metric-strip strong{display:block;font-size:25px;color:#d5b4f2;font-weight:500;margin-top:7px;letter-spacing:-1px}.metric-strip em{font-style:normal;font-size:12px;color:#927aa4;margin-inline-start:3px;letter-spacing:0}.radar-chart{max-width:260px;margin:0 auto}.radar-chart svg{width:100%;height:192px;display:block}.chart-legend{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;font-size:10px;color:#a08cae;margin-top:8px}.chart-legend span{display:flex;align-items:center;gap:5px}.chart-legend i{display:inline-block;width:5px;height:5px;border-radius:50%}.loss{background:#665373}.stat-bars{display:grid;gap:17px;padding-block:6px}.stat-comparison>div:first-child{display:flex;justify-content:space-between;font-size:11px;margin-bottom:7px;color:#93809f}.stat-comparison strong{font-size:12px;font-weight:500;color:#c4a4e0}.stat-comparison strong:last-child{color:#6bb79f}.double-bar{height:4px;display:flex;gap:3px}.double-bar i{height:100%;display:block;background:#a374cf;border-radius:3px}.double-bar b{height:100%;display:block;background:#4b9b83;border-radius:3px}.card-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.card-heading>span{font-size:11px;color:#9e82b5}.area-chart{width:100%}.area-chart svg{width:100%;height:105px;display:block}.chart-axis{display:flex;justify-content:space-between;color:#726180;font-size:8px;margin-top:9px}.feature-art .chart-axis{display:none}.feature-art .area-chart{max-width:290px}.club-picker{display:flex;gap:7px;overflow:auto;padding:2px 0 14px;scrollbar-width:thin;scrollbar-color:#584164 transparent}.club-picker button{flex-shrink:0;display:flex;align-items:center;gap:7px;border:1px solid #ffffff0d;background:#ffffff025;padding:7px 10px;border-radius:6px;color:#ab94bc;font-size:11px}.club-picker button .club-badge{width:21px;height:24px;font-size:8px}.club-picker button.active{border-color:#a855f751;background:#a855f714}.club-hero{background:linear-gradient(110deg,#a855f71c,transparent),url('assets/stadium-night.png') center 60%/cover;display:flex;justify-content:space-between;align-items:center;padding:22px;position:relative;isolation:isolate}.club-hero:before{content:"";position:absolute;inset:0;background:#0d0818b8;z-index:-1;border-radius:7px}.club-hero>div:first-child{display:flex;gap:15px;align-items:center}.club-hero h3{font-size:20px;margin:0 0 5px}.club-hero p{font-size:11px;margin:0 0 5px}.club-hero small{color:#9d83b2;font-size:10px}.club-wdl{display:flex;gap:16px;text-align:center}.club-wdl>span{font-size:8px;color:#92809f}.club-wdl strong{display:block;font-size:25px;font-weight:500;color:#c9a6e9;margin-bottom:5px}.donut-wrap{padding:8px}.donut{width:144px;height:144px;border-radius:50%;padding:18px;margin:0 auto 17px;transform:rotate(-90deg)}.donut>div{height:100%;width:100%;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#111016;transform:rotate(90deg)}.donut strong{font-size:29px;font-weight:500;color:#d9c9e6}.donut small{font-size:8px;color:#836d94;letter-spacing:1px;margin-top:4px}.lineup-pitch{position:relative;aspect-ratio:4/5;width:100%;max-width:330px;margin:12px auto 16px;border:1px solid #a78aba30;background:repeating-linear-gradient(0deg,#261c3422 0 12.5%,#a855f707 12.5% 25%);overflow:hidden;border-radius:4px}.lineup-pitch:before{content:"";position:absolute;inset:8px;border:1px solid #ffffff13}.lineup-pitch:after{content:"";position:absolute;top:50%;inset-inline:8px;height:1px;background:#ffffff13}.pitch-centre{position:absolute;width:29%;aspect-ratio:1;border:1px solid #ffffff13;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%)}.penalty{position:absolute;left:26%;width:48%;height:15%;border:1px solid #ffffff13}.penalty.top{top:8px}.penalty.bottom{bottom:8px}.pitch-player{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:3px;z-index:1}.pitch-player b{display:grid;place-items:center;width:29px;height:29px;border-radius:50%;border:1px solid #cda3ed66;font-size:10px;color:#ece2f5;font-weight:500}.pitch-player small{font-size:8px;color:#b19ac2;white-space:nowrap}.formation-label{position:absolute;bottom:4px;left:10px;font-size:7px;letter-spacing:2px;color:#71617c}.compact-pitch{max-width:165px;margin-block:0}.compact-pitch .pitch-player b{width:18px;height:18px;font-size:7px}.compact-pitch .pitch-player small{display:none}.roster{display:grid;grid-template-columns:1fr 1fr;gap:4px 20px}.roster>div{display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #ffffff08;min-width:0}.roster-number{font-size:10px;color:#766285;width:14px}.roster .avatar{width:23px;height:23px;font-size:8px}.roster strong{font-size:12px;font-weight:500;color:#bda9cc}.roster small{font-size:10px;color:#72627e;margin-inline-start:auto}.stadium-info{background:linear-gradient(#100b17b0,#100b17e8),url('assets/stadium-night.png') center/cover}.stadium-info>strong{font-size:28px;font-weight:500;color:#d7b9ed}.stadium-info small{font-size:10px;color:#a18cae}.coach-profile{display:flex;align-items:center;gap:10px;margin-block:17px}.coach-profile .avatar{width:44px;height:44px;font-size:13px}.coach-profile strong{font-size:14px;font-weight:500;color:#cfbbdf}.coach-profile small{font-size:10px;color:#83708f;display:block;margin-top:5px}.mini-metrics{font-size:10px;color:#8d799c;display:flex;gap:15px;margin-top:18px}.mini-metrics b{display:block;color:#bd9ad7;font-size:15px;margin-top:6px}.standings-table{width:100%;border-collapse:collapse;font-size:12px;margin-bottom:18px;text-align:start}.standings-table th{font-size:9px;letter-spacing:.8px;color:#83708f;padding:10px 7px;text-align:start;border-bottom:1px solid #ffffff10}.standings-table td{padding:7px;color:#9d88ac;border-bottom:1px solid #ffffff06}.standings-table td:first-child{width:29px;color:#6e577f}.standings-table button{display:flex;align-items:center;gap:9px;background:none;color:#c8b7d5;padding:0;text-align:start}.standings-table .club-badge{width:23px;height:26px;font-size:8px}.standings-table strong{font-weight:400;font-size:12px}.standings-table .points{font-weight:600;color:#d5aff4}.standings-table tbody tr:first-child{background:#a855f70b}.matchday-strip{display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:11px;color:#8c759e;padding-block:10px}.matchday-strip label{display:flex;gap:9px;align-items:center}.matchday-strip>span{font-size:9px}.calendar-days{display:grid;grid-template-columns:repeat(7,1fr);border:1px solid #ffffff0e;border-radius:7px;margin:9px 0 19px;overflow:hidden}.calendar-days button{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;background:#ffffff025;padding:13px 6px;color:#9981ab}.calendar-days button.active{background:#a855f71c;color:#d7adfc}.calendar-days small{font-size:8px}.calendar-days strong{font-size:14px;font-weight:500}.calendar-days i{position:absolute;bottom:4px;width:3px;height:3px;border-radius:50%;background:#bc92e4}.fixture-grid{display:grid;gap:12px}.fixture-card{display:grid;grid-template-columns:1fr 85px 1fr;gap:13px;align-items:center;text-align:start;padding:18px;width:100%}.fixture-card>span{display:flex;align-items:center;gap:8px;font-size:12px}.fixture-card strong{font-weight:500;color:#cbb6dc}.fixture-card>span:nth-child(3){justify-content:end;text-align:end}.fixture-card .fixture-score{display:block;text-align:center;font-size:20px;color:#ddbef7;font-weight:500}.fixture-score small{display:block;color:#8f76a1;font-size:7px;letter-spacing:.8px;margin-top:8px}.fixture-card>small{grid-column:1/-1;font-size:9px;text-align:center;color:#7c628f;border-top:1px solid #ffffff08;padding-top:12px}.game-header{display:grid;grid-template-columns:1fr 130px 1fr;align-items:center;gap:12px;margin:10px 0 20px}.game-header>div{display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;min-width:0}.game-header strong{font-size:15px;font-weight:500;color:#e0ccef}.game-header small{font-size:10px;color:#8b759c}.game-header .game-score>strong{font-size:36px;letter-spacing:2px}.game-score .visibility-tag{font-size:8px}.full-timeline{padding:17px 5px 12px;margin-bottom:15px;border-block:1px solid #ffffff0b}.timeline-caption{display:flex;align-items:center;gap:10px;font-size:11px;color:#9179a1}.timeline-caption strong{font-size:12px;color:#ba8de0;white-space:nowrap}.event-line{height:2px;position:relative;background:#ffffff12;margin:28px 12px 22px}.event-line>i{display:block;height:100%;background:#a275c9}.event-line button{position:absolute;top:50%;transform:translate(-50%,-50%);background:#251533;border:1px solid #9873b67d;border-radius:50%;font-size:9px;width:18px;height:18px;padding:0}.event-line button small{position:absolute;top:22px;left:50%;transform:translateX(-50%);font-size:8px;color:#ae8ac4}.full-timeline .chart-axis{padding-top:8px}.event-list{padding:0;margin:12px 0;list-style:none;display:grid;gap:0}.event-list li{display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid #ffffff08}.event-list b{font-size:13px;font-weight:500;color:#bb90db;width:28px}.event-list>li>span{font-size:12px}.event-list strong{font-size:13px;font-weight:500;color:#c2aad2}.event-list small{display:block;margin-top:5px;font-size:10px;color:#897197}.match-note{font-size:11px;color:#715f7e;line-height:1.5;margin-top:15px}.actions-chart{height:130px;display:flex;align-items:end;gap:10px;padding:10px 0 20px}.actions-chart>div{position:relative;display:flex;align-items:end;justify-content:center;height:100%;flex:1}.actions-chart i{width:6px;background:linear-gradient(#b584df 0 65%,#4e9d83 65%);border-radius:2px}.actions-chart small{position:absolute;bottom:-18px;font-size:7px;color:#8b7599}.heat-pitch{position:relative;aspect-ratio:1.6;border:1px solid #ac86c43b;border-radius:4px;margin-top:15px;background:radial-gradient(ellipse at 78% 28%,#a855f752,transparent 42%),radial-gradient(ellipse at 66% 79%,#10b98124,transparent 38%),#141019}.heat-pitch:before{content:"";position:absolute;inset:8px;border:1px solid #ffffff20}.heat-pitch:after{content:"";position:absolute;left:50%;inset-block:8px;width:1px;background:#ffffff20}.heat-pitch>div{position:absolute;width:22%;aspect-ratio:1;border:1px solid #ffffff20;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%)}.profile-card{text-align:center;padding:32px}.profile-card>.avatar{width:65px;height:65px;font-size:22px;margin:0 auto 19px}.profile-card h3{font-size:23px}.profile-card .metric-strip{grid-template-columns:repeat(3,1fr);margin-block:28px}.profile-card .metric-strip>div:first-child{border:0}.settings-card>div{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 0;border-bottom:1px solid #ffffff0c}.settings-card strong{font-size:13px;font-weight:500;color:#c4afd5}.settings-card small{font-size:11px;color:#887093;display:block;line-height:1.5;margin-top:6px}.settings-card .button{font-size:11px;padding:8px 12px;min-width:95px}.settings-card input{max-width:120px;accent-color:#a578ce}.settings-card>button{margin-top:20px}.match-dialog{width:min(94vw,730px)}.match-dialog>h2{font-size:25px;margin-block:15px 22px}.match-dialog .chip-tabs{justify-content:center;margin-top:15px}.match-dialog .lineup-pitch{max-width:270px}.match-dialog .analytics-grid .data-card h3{font-size:13px;font-weight:500;color:#c9b5d9;margin-top:0}.match-dialog .analytics-grid .wide{grid-column:1/-1}.match-dialog .stat-bars{padding:10px}.dim-theme{background:#1c1524}.dim-theme .sidebar{background:#231a2c}.dim-theme .data-card{background:#ffffff06}.dashboard[dir=rtl] .sidebar{border-right:0;border-left:1px solid #ffffff0c}.dashboard[dir=rtl] .track-table{text-align:right}.dashboard[dir=rtl] .library-topline,.dashboard[dir=rtl] .library-heading{text-align:right}.dashboard .side-item{font-size:calc(12px * var(--ui-scale))}.dashboard .track-copy strong{font-size:calc(13px * var(--ui-scale))}.dashboard .library-heading h2{font-size:calc(27px * var(--ui-scale))}
@media(max-width:1350px){.header-controls{gap:7px}.font-control{display:none}.track-copy strong{font-size:12px}.match-table .date-col{width:84px}.match-row-button .track-copy small{max-width:205px}.sidebar .workspace-brand{font-size:11px}.sidebar .workspace-brand small{font-size:9px}.match-table .score-cell{font-size:12px}.club-wdl{gap:12px}.aux-panel{padding-inline:18px}.fixture-card{grid-template-columns:1fr 65px 1fr;gap:8px}.fixture-card strong{font-size:11px}.fixture-card .club-badge{width:23px;height:27px;font-size:8px}}
@media(max-width:1100px){.match-table .date-col{display:none}.match-table .date-cell{display:none}.sidebar .workspace-brand{gap:7px}.header-controls .demo-indicator{display:none}.match-table .track-copy strong{font-size:12px}.game-header{grid-template-columns:1fr 105px 1fr}.game-header small{font-size:9px}.roster{grid-template-columns:1fr}.stat-bars{gap:13px}.analytics-grid{gap:9px}.data-card{padding:13px}.club-hero{padding:16px}.club-hero h3{font-size:17px}.panel-top{flex-wrap:wrap}.club-wdl strong{font-size:21px}.match-strip-link small{max-width:190px}.strip-timeline{max-width:170px}.actions-chart{gap:5px}}
@media(max-width:800px){.match-table .track-copy strong{font-size:11px}.match-row-button .track-copy small{font-size:9px;max-width:175px}.badge-pair{width:39px}.badge-pair .club-badge{width:25px;height:29px;font-size:8px}.match-table .visibility-col{width:58px}.match-table .duration-col{width:45px}.strip-timeline{flex:0;gap:8px}.strip-timeline .mini-timeline{display:none}.game-header .club-badge.large{width:35px;height:39px;font-size:12px}.game-header strong{font-size:12px}.game-header .game-score>strong{font-size:28px}.club-hero{align-items:start;gap:15px;flex-wrap:wrap}.club-wdl{margin-inline-start:65px;gap:25px}.chip-tabs button{padding:7px 9px;font-size:10px}.metric-strip{gap:8px}.metric-strip strong{font-size:21px}.metric-strip small{font-size:9px}.data-card h3{font-size:12px}.chart-legend{gap:7px;font-size:9px}.donut{width:118px;height:118px;padding:14px}.donut strong{font-size:25px}.compact-select select{font-size:11px}.fixture-card{padding:12px}.matchday-strip{flex-wrap:wrap}.radar-chart svg{height:160px}}
@media(max-width:600px){.mobile-view-control{display:flex;align-items:center;justify-content:space-between;padding:0 15px 17px;font-size:11px;color:#8e779e}.mobile-view-control select{padding:6px 9px;font-size:11px;width:155px}.library-heading{padding-bottom:18px}.header-controls .demo-indicator{display:block;font-size:6px}.header-controls{gap:9px}.header-control{font-size:9px}.match-table .track-copy strong{font-size:11px;white-space:normal;line-height:1.4;max-width:175px}.match-table .track-copy small{font-size:9px;max-width:160px}.match-table .number-col{width:25px}.match-table .row-play{margin:0;width:23px;padding:2px;font-size:9px}.match-table .duration-col{width:37px}.match-table .score-cell{font-size:11px}.match-table .visibility-col{width:52px}.match-table .visibility-tag{font-size:8px;padding-inline:3px;white-space:nowrap}.match-table th{font-size:7px}.match-table .favorite-col{width:23px}.match-table .favorite-button{padding:3px}.match-table .favorite-button svg{width:12px;height:12px}.badge-pair{width:27px;position:relative;align-self:center;height:37px}.badge-pair .club-badge{width:21px;height:24px;font-size:7px;position:absolute;top:0;left:0;z-index:0}.badge-pair .club-badge+.club-badge{position:absolute;top:13px;left:9px;margin:0;z-index:1}.match-row-button{gap:7px}.match-summary-strip{gap:9px}.match-strip-link .cover{width:27px;height:30px;font-size:10px}.match-strip-link strong{font-size:10px;max-width:180px}.match-strip-link small{font-size:8px;max-width:180px}.strip-timeline{font-size:9px;gap:6px}.strip-timeline>span{display:none}.strip-timeline strong{font-size:11px}.aux-panel{max-height:650px;padding:0 13px 15px;min-height:405px}.analytics-grid{grid-template-columns:1fr}.analytics-grid .wide{grid-column:auto}.analytics-grid .data-card{padding:16px}.metric-strip{gap:5px}.metric-strip>div{padding-inline-start:7px}.metric-strip small{font-size:9px}.metric-strip strong{font-size:23px}.metric-strip em{font-size:9px}.panel-top{gap:8px}.compact-select{font-size:10px;max-width:100%}.compact-select select{max-width:220px}.panel-note{font-size:8px}.club-hero h3{font-size:18px}.club-wdl{margin-inline-start:65px}.club-wdl strong{font-size:23px}.club-wdl>span{font-size:9px}.compact-pitch{max-width:220px}.compact-pitch .pitch-player b{width:23px;height:23px;font-size:8px}.donut{width:150px;height:150px;padding:18px}.donut strong{font-size:30px}.data-card h3{font-size:14px}.standings-table th{font-size:8px;padding-inline:4px}.standings-table td{font-size:11px;padding-inline:4px}.standings-table strong{font-size:11px}.standings-table .club-badge{width:21px;height:24px;font-size:7px}.standings-table button{gap:6px}.goals-column{display:none}.roster{grid-template-columns:1fr 1fr;gap:5px 12px}.roster .avatar{display:none}.roster small{font-size:8px}.roster strong{font-size:11px}.game-header{grid-template-columns:1fr 100px 1fr;gap:5px}.game-header small{font-size:8px;line-height:1.4}.game-header strong{font-size:12px}.game-header .game-score>strong{font-size:28px}.game-score .visibility-tag{font-size:7px}.game-header .club-badge.large{width:34px;height:39px;font-size:12px}.timeline-caption{font-size:10px;line-height:1.5}.timeline-caption strong{font-size:10px}.calendar-days button{padding-block:12px}.calendar-days strong{font-size:14px}.fixture-card{grid-template-columns:1fr 58px 1fr;padding:14px 9px}.fixture-card>span{flex-direction:column;gap:6px;text-align:center}.fixture-card>span:nth-child(3){text-align:center}.fixture-card strong{font-size:11px}.fixture-card .fixture-score{font-size:19px}.fixture-score small{font-size:7px}.profile-card{padding:25px 17px}.settings-card>div{align-items:start;gap:10px}.settings-card .button{font-size:10px;min-width:75px;padding:7px 9px}.settings-card strong{font-size:12px}.settings-card small{font-size:10px;max-width:170px}.settings-card input{width:80px}.match-dialog{padding:25px 18px}.match-dialog>h2{font-size:21px;margin-top:20px}.match-dialog .chip-tabs{gap:5px}.match-dialog .chip-tabs button{font-size:11px}.match-dialog .analytics-grid{grid-template-columns:1fr}.match-dialog .analytics-grid .wide{grid-column:auto}.match-dialog .lineup-pitch{max-width:255px}.radar-chart svg{height:215px}}
@media(max-width:360px){.match-row-button .track-copy small{max-width:128px}.match-table .track-copy strong{font-size:10px}.badge-pair{display:none}.header-controls .demo-indicator{display:none}.match-table .number-col{width:25px}.match-strip-link strong,.match-strip-link small{max-width:165px}}
  </style>

<style id="winmix-10x-design">
/* =========================================================
   WINMIX 10X DESIGN PASS
   Premium football-intelligence landing page
   ========================================================= */
:root{
  --base:#060708;
  --base-2:#0a0c0d;
  --surface:#0e1112;
  --surface-2:#121617;
  --surface-3:#171b1c;
  --stroke:rgba(255,255,255,.095);
  --stroke-strong:rgba(255,255,255,.16);
  --text:#f5f7f4;
  --muted:#8e9690;
  --muted-2:#66706a;
  --lime:#c8ff36;
  --lime-soft:#c8ff361c;
  --lime-line:#c8ff3666;
  --violet:#a878e8;
  --green:#55d3a5;
  --danger:#ff756e;
  --shadow:0 30px 90px rgba(0,0,0,.46);
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
}
html{background:var(--base);scrollbar-color:#343a36 #070808}
body{
  background:
    radial-gradient(900px 520px at 50% -10%,rgba(200,255,54,.055),transparent 70%),
    radial-gradient(700px 500px at 88% 35%,rgba(168,120,232,.055),transparent 72%),
    var(--base);
  letter-spacing:-.01em;
}
body:before{
  opacity:.18;
  background-image:
    linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
  background-size:72px 72px;
  mask-image:linear-gradient(to bottom,#000,transparent 80%);
}
.page-rails{inset-inline:28px;border-color:rgba(255,255,255,.045);max-width:1540px}

.site-header{
  background:rgba(6,7,8,.72);
  border-bottom:1px solid rgba(255,255,255,.075);
  backdrop-filter:blur(28px) saturate(140%);
}
.nav-inner{height:74px;max-width:1500px;padding:0 42px}
.brand{font-size:20px;font-weight:600;letter-spacing:-1px}
.brand-icon{
  width:31px;height:31px;border-radius:9px;
  color:#10120d;background:var(--lime);
  border:1px solid rgba(255,255,255,.32);
  box-shadow:0 0 30px rgba(200,255,54,.14),inset 0 1px 0 rgba(255,255,255,.45);
}
.nav-links{gap:28px}
.nav-links a{font-size:13px;color:#858d88}
.nav-links a:hover{color:#fff}
.button{
  border-radius:8px;
  border-color:rgba(255,255,255,.13);
  padding:12px 18px;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.06);
}
.button:hover{transform:translateY(-1px)}
.primary{
  color:#0a0c08;
  background:linear-gradient(180deg,#d7ff62,#b7ee26);
  border-color:#e1ff89;
  box-shadow:0 8px 30px rgba(200,255,54,.14),inset 0 1px 0 rgba(255,255,255,.7);
}
.primary:hover{background:linear-gradient(180deg,#e1ff7c,#c2f63b);border-color:#f0ffa8}
.secondary,.nav-cta{
  background:rgba(255,255,255,.035);
  border-color:rgba(255,255,255,.13);
}
.nav-cta{padding:9px 14px}

.hero{padding-top:56px}
.stadium{
  top:170px;
  height:980px;
  opacity:.34;
  filter:grayscale(.7) contrast(1.08) blur(1.8px);
  mask-image:linear-gradient(to bottom,transparent 0%,#000 20%,#000 58%,transparent 92%);
}
.stadium:after{
  background:
    linear-gradient(90deg,#060708 0%,transparent 25%,transparent 75%,#060708 100%),
    linear-gradient(#060708c8,transparent 38%,#060708de 82%);
}
.hero:before{
  background:
    radial-gradient(ellipse 600px 430px at 50% 180px,rgba(200,255,54,.075),transparent 76%),
    radial-gradient(ellipse 720px 330px at 50% 710px,rgba(168,120,232,.11),transparent 78%);
}
.hero-grid{
  height:680px;
  background-size:96px 96px;
  background-image:
    linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
}
.hero-copy{max-width:980px}
.release-badge{
  padding:5px 10px 5px 5px;
  background:rgba(255,255,255,.035);
  border-color:rgba(255,255,255,.11);
  box-shadow:0 10px 35px rgba(0,0,0,.2);
}
.release-label{
  color:#11150c;
  background:var(--lime);
  border-color:#dfff7e;
  font-size:9px;
}
.hero-monogram{
  width:88px;height:74px;
  margin:34px auto 28px;
}
.hero-monogram>span{
  border-color:rgba(200,255,54,.55);
  background:linear-gradient(145deg,rgba(200,255,54,.11),rgba(255,255,255,.015) 52%,rgba(168,120,232,.08));
  box-shadow:0 0 0 5px rgba(200,255,54,.025),0 0 70px rgba(200,255,54,.09),inset 0 1px 2px rgba(255,255,255,.16);
}
.bracket{border-color:rgba(200,255,54,.36)}
.monogram-orbit{background:linear-gradient(90deg,transparent,rgba(200,255,54,.16),transparent)}
h1{
  font-size:clamp(64px,7vw,104px);
  font-weight:500;
  letter-spacing:-6px;
  line-height:.96;
}
.soft-word{
  background:linear-gradient(180deg,#fff 0%,#9ea7a0 100%);
}
.hero-description{
  color:#9aa39d;
  max-width:650px;
  font-size:16px;
}
.hero-actions{margin-top:28px}
.hero-actions .secondary{color:#d8ddd9}
.social-proof{margin-top:34px}
.proof-caption{color:#8b948e}
.avatar-stack .avatar{border-color:#151918}
.review-badges{color:#747d77}
.review-badges strong{color:#dce2dd}
.trust-star{color:var(--lime)}

.studio-stage{
  max-width:1180px;
  margin-top:52px;
}
.stage-label{
  color:#737c76;
  letter-spacing:1.7px;
  margin-bottom:15px;
}
.stage-label i{background:var(--lime);box-shadow:0 0 10px rgba(200,255,54,.6)}
.dashboard-shell{
  padding:6px;
  border-radius:18px;
  border-color:rgba(255,255,255,.15);
  background:
    linear-gradient(135deg,rgba(255,255,255,.13),rgba(255,255,255,.025) 30%,rgba(200,255,54,.08) 70%,rgba(255,255,255,.06));
  box-shadow:0 45px 120px rgba(0,0,0,.56),0 0 80px rgba(200,255,54,.035);
}
.dashboard-shell:before{
  background:linear-gradient(90deg,transparent,rgba(200,255,54,.6),#fff,rgba(168,120,232,.55),transparent);
}
.dashboard{
  background:rgba(9,11,11,.94);
  border-color:rgba(255,255,255,.09);
  border-radius:12px;
  min-height:700px;
}
.sidebar{
  width:218px;
  background:
    linear-gradient(160deg,rgba(255,255,255,.045),transparent 35%),
    rgba(11,13,13,.82);
  border-right-color:rgba(255,255,255,.08);
}
.workspace-icon{
  color:#11150b;
  background:var(--lime);
  border-color:#dfff7c;
}
.workspace-brand small{color:#69736d}
.sidebar-label{color:#59625c}
.side-item{color:#7e8982;border-radius:7px}
.side-item:hover{background:rgba(255,255,255,.045);color:#e8ece9}
.side-item.selected{
  color:#d9ff77;
  background:rgba(200,255,54,.08);
  border-color:rgba(200,255,54,.13);
}
.item-count{color:#bde85a}
.sidebar-divider{background:rgba(255,255,255,.075)}
.plan-card{
  background:rgba(255,255,255,.025);
  border-color:rgba(255,255,255,.08);
}
.plan-card strong{color:#edf2ee}
.usage-bar{background:rgba(255,255,255,.07)}
.usage-bar i{background:var(--lime);box-shadow:0 0 12px rgba(200,255,54,.35)}

.library-topline{
  border-bottom-color:rgba(255,255,255,.065);
  color:#68716b;
}
.demo-indicator{
  color:#a6b09f;
  border-color:rgba(200,255,54,.18);
  background:rgba(200,255,54,.045);
}
.header-control[aria-pressed=true]{color:var(--lime)}
.library-heading{padding-block:25px}
.library-heading h2{font-size:29px;letter-spacing:-1.4px}
.title-dot{color:var(--lime)}
.library-heading p{color:#707a73}
.small-button{background:rgba(255,255,255,.035);border-color:rgba(255,255,255,.1)}
.small-button [data-icon] svg{color:var(--lime)}
.library-toolbar{border-bottom-color:rgba(255,255,255,.08)}
.tabs{gap:24px}
.tabs button{color:#667069}
.tabs button[aria-selected=true]{color:#e9eee9}
.tabs button[aria-selected=true]:after{background:var(--lime);box-shadow:0 0 10px rgba(200,255,54,.3)}
.tabs button span{color:#c8ff36;background:rgba(200,255,54,.08)}
.search-field,.filter-button{
  background:rgba(255,255,255,.025);
  border-color:rgba(255,255,255,.09);
}
.search-field input{color:#e5ebe6}
.search-field input::placeholder{color:#626b65}
.filter-button[aria-expanded=true]{background:rgba(200,255,54,.08);color:var(--lime)}
.track-table th{color:#626c66}
.track-table td{border-top-color:rgba(255,255,255,.045);color:#929c95}
.track-table tbody tr:hover{background:rgba(255,255,255,.025)}
.track-table tbody tr.active-track{background:linear-gradient(90deg,rgba(200,255,54,.075),rgba(200,255,54,.018))}
.track-copy strong{color:#dfe5e1}
.track-table .active-track .track-copy strong{color:#d8ff73}
.cover{background:#1a1e1c;border-color:rgba(255,255,255,.13)}
.club-badge{background:#181d1b}
.visibility-tag{
  color:#9aa49d;
  border-color:rgba(255,255,255,.1);
  background:rgba(255,255,255,.035);
}
.visibility-tag.public{
  color:#bff45e;
  background:rgba(200,255,54,.075);
  border-color:rgba(200,255,54,.18);
}
.favorite-button{color:#56605a}
.favorite-button[aria-pressed=true]{color:var(--lime)}
.player{
  background:linear-gradient(90deg,rgba(200,255,54,.045),rgba(255,255,255,.018));
  border-top-color:rgba(255,255,255,.08);
}
.main-play{background:var(--lime);color:#10140b}
.playback input{accent-color:var(--lime)}
.now-playing strong{color:#e6ece8}
.now-playing small{color:#718078}
.transport,.volume-button{color:#7f8a83}

.floating-card{
  border-color:rgba(255,255,255,.13);
  background:linear-gradient(135deg,rgba(27,31,29,.88),rgba(11,13,13,.94));
  box-shadow:0 25px 65px rgba(0,0,0,.35);
}
.collaborator-card{transform:rotate(-4deg)}
.activity-card{background:linear-gradient(140deg,rgba(27,32,29,.92),rgba(13,15,15,.96));transform:rotate(4deg)}
.activity-heading{color:#c3ccc6}
.activity-card em{color:var(--lime)}
.activity-bars i{background:linear-gradient(var(--lime),#536b2a)}

.features{
  padding-top:115px;
  padding-bottom:95px;
}
.section-heading{margin-bottom:48px}
.eyebrow{color:#7d8a81;letter-spacing:1.8px}
.section-heading h2{
  font-size:clamp(42px,4vw,58px);
  letter-spacing:-2.7px;
}
.section-heading h2 span{color:#747d77}
.section-heading>p{color:#858f88}
.feature-grid{
  border-color:rgba(255,255,255,.09);
  background:rgba(255,255,255,.012);
  box-shadow:0 35px 100px rgba(0,0,0,.24);
}
.feature-card{
  padding:31px 30px;
  background:radial-gradient(ellipse at 50% 0%,rgba(200,255,54,.035),transparent 65%);
}
.feature-card+.feature-card{border-left-color:rgba(255,255,255,.08)}
.feature-card:hover{
  background:radial-gradient(ellipse at 50% 0%,rgba(200,255,54,.065),transparent 68%);
}
.feature-number{color:#626d66}
.feature-number svg{color:var(--lime)}
.feature-card h3{font-size:19px}
.feature-card p{color:#7e8881}
.feature-card a{color:#aab4ad}
.feature-card a span{color:var(--lime)}
.waveform-art i{background:linear-gradient(var(--lime),#3b4528)}
.collection-art>div{
  background:linear-gradient(135deg,#171c19,#0b0d0d);
  border-color:rgba(200,255,54,.12);
}
.collection-art>div>span:last-child{color:#718078}
.team-check{
  color:#d6ff77;
  background:rgba(200,255,54,.07);
  border-color:rgba(200,255,54,.2);
}

.closing{
  margin-bottom:82px;
  padding:50px 56px;
  background:
    radial-gradient(ellipse at 15% 120%,rgba(200,255,54,.1),transparent 58%),
    linear-gradient(110deg,rgba(255,255,255,.035),rgba(255,255,255,.012));
  border-color:rgba(255,255,255,.1);
  box-shadow:0 30px 90px rgba(0,0,0,.24);
}
.closing h2{font-size:39px;letter-spacing:-1.8px}
.closing .tl,.closing .br{border-color:rgba(200,255,54,.4)}
.site-footer{
  max-width:1420px;
  border-top-color:rgba(255,255,255,.08);
  color:#68716b;
  padding:28px 42px 38px;
}
.site-footer .brand{color:#aab2ac}
.site-footer .brand-icon{color:#11150c;background:var(--lime);border-color:#dcff7a}

.tour-dialog{
  background:
    radial-gradient(500px 300px at 50% 0%,rgba(200,255,54,.1),transparent 70%),
    #0d1010;
  border-color:rgba(255,255,255,.15);
  box-shadow:0 40px 120px rgba(0,0,0,.7);
}
.tour-dialog::backdrop{background:rgba(2,3,3,.82);backdrop-filter:blur(14px)}
.dialog-close{color:#89938c}
.tour-dots i{background:#394039}
.tour-dots i.active{background:var(--lime)}

.toast{
  background:#141814;
  color:#dfff8b;
  border-color:rgba(200,255,54,.25);
  box-shadow:0 20px 60px rgba(0,0,0,.45);
}

/* Analytics / inner views */
.data-card{
  background:linear-gradient(145deg,rgba(255,255,255,.035),rgba(255,255,255,.012));
  border-color:rgba(255,255,255,.08);
}
.aux-panel h3{color:#dfe6e1}
.aux-panel p{color:#849088}
.chip-tabs button{color:#839087;border-color:rgba(255,255,255,.08)}
.chip-tabs button.active{
  color:#dfff7d;
  background:rgba(200,255,54,.08);
  border-color:rgba(200,255,54,.2);
}
.metric-strip>div{border-color:rgba(255,255,255,.09)}
.metric-strip small{color:#7b8780}
.metric-strip strong{color:#d8ff74}
.double-bar i{background:var(--lime)}
.double-bar b{background:#4fae8b}
.chart-legend{color:#829088}
.chart-legend i.purple{background:var(--lime)}
.club-hero{
  background:linear-gradient(110deg,rgba(200,255,54,.12),transparent),url('assets/stadium-night.png') center 60%/cover;
}
.club-hero:before{background:rgba(7,10,9,.78)}
.club-hero h3{color:#eff4f0}
.club-wdl strong{color:#d8ff74}
.standings-table tbody tr:first-child{background:rgba(200,255,54,.055)}
.standings-table .points{color:#d8ff74}
.matchday-strip input,.compact-select select,.mobile-view-control select,.filter-panel select,.filter-panel input{
  background:#111514;border-color:rgba(255,255,255,.11);color:#dce4df;
}
.calendar-days button.active{background:rgba(200,255,54,.09);color:#dfff7b}
.calendar-days button i{background:var(--lime)}
.fixture-card{background:linear-gradient(145deg,rgba(255,255,255,.03),rgba(255,255,255,.012))}
.fixture-card .fixture-score{color:#e2ff89}
.game-header .game-score>strong{color:#e4ff91}
.event-line>i{background:var(--lime)}
.event-line button{border-color:rgba(200,255,54,.35);background:#18200f}
.event-list b{color:#d4ff6d}
.actions-chart i{background:linear-gradient(var(--lime) 0 65%,#4e9d83 65%)}
.heat-pitch{background:radial-gradient(ellipse at 78% 28%,rgba(200,255,54,.28),transparent 42%),radial-gradient(ellipse at 66% 79%,rgba(16,185,129,.12),transparent 38%),#121715}
.profile-card>.avatar{border-color:rgba(200,255,54,.3)}

@media(max-width:1100px){
  .nav-inner{padding-inline:28px}
  .studio-stage{max-width:calc(100% - 100px)}
  .features{padding-inline:42px}
}
@media(max-width:800px){
  .nav-inner{height:68px;padding-inline:20px}
  .hero{padding-top:40px}
  h1{font-size:clamp(56px,15vw,78px);letter-spacing:-4px}
  .hero-description{font-size:14px}
  .studio-stage{max-width:calc(100% - 34px);margin-top:40px}
  .dashboard-shell{padding:4px}
  .dashboard{min-height:0}
  .features{padding:78px 20px 55px}
  .section-heading h2{font-size:39px}
  .closing{margin-inline:20px;padding:34px 26px}
  .site-footer{padding-inline:20px}
}
@media(max-width:600px){
  .page-rails{inset-inline:6px}
  .nav-cta{padding:8px 10px}
  .hero{padding-top:32px}
  .hero-monogram{width:72px;height:62px}
  .hero-monogram>span{font-size:40px}
  h1{font-size:58px;letter-spacing:-3.5px}
  .hero-description{max-width:355px}
  .hero-actions{flex-wrap:wrap}
  .hero-actions .button{padding:12px 14px}
  .studio-stage{max-width:calc(100% - 24px)}
  .dashboard{overflow:hidden}
  .library-heading h2{font-size:26px}
  .tabs{gap:15px}
  .features{padding-inline:18px}
  .section-heading h2{font-size:36px}
  .feature-card{padding:25px}
  .closing{margin-inline:18px}
}
@media(prefers-reduced-motion:reduce){
  .dashboard-shell,.feature-card,.button{transition:none!important}
}
</style>

</head>
<body>
  <a href="#main" class="skip-link">Skip to content</a>
  <div class="page-rails" aria-hidden="true"></div>
  <header class="site-header">
    <nav class="nav-inner" aria-label="Main navigation">
      <a class="brand" href="#main"><span class="brand-icon">W</span> winmix<span class="brand-period">®</span></a>
      <div class="nav-links" id="nav-links"><a href="#library" data-go="matches">Matches</a><a href="#library" data-go="clubs">Clubs</a><a href="#features">Analytics</a></div>
      <a href="#library" class="button nav-cta">Explore the matches <span aria-hidden="true">↗</span></a>
      <button class="menu-button" aria-label="Open navigation" aria-controls="nav-links" aria-expanded="false"><span></span><span></span></button>
    </nav>
  </header>
  <main id="main">
    <section class="hero" id="product" aria-labelledby="hero-title">
      <div class="stadium" aria-hidden="true"></div>
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-copy">
        <div class="release-badge" data-hero><span class="release-label">WINMIX 3.0</span><span>Virtual Football Analytics</span><span aria-hidden="true">↗</span></div>
        <div class="hero-monogram" aria-hidden="true"><i class="bracket tl"></i><i class="bracket tr"></i><i class="bracket bl"></i><i class="bracket br"></i><span>W</span><div class="monogram-orbit"></div></div>
        <h1 id="hero-title"><span class="word-mask"><span data-word>Your</span></span> <span class="word-mask"><span data-word>match.</span></span><br> <span class="word-mask"><span data-word class="soft-word">Decoded.</span></span></h1>
        <p class="hero-description" data-hero>Every result, every team, every trend — in one place.<br class="desktop-break"> Your complete view of virtual football.</p>
        <div class="hero-actions" data-hero><a href="#library" class="button primary">Explore the matches <span aria-hidden="true">↗</span></a><button class="button secondary" id="tour-button"><span class="play-outline" aria-hidden="true">▷</span> See it in motion <span class="button-time">1 min</span></button></div>
        <div class="social-proof" data-hero><div class="proof-caption"><span class="avatar-stack" aria-hidden="true"><b class="avatar a1">MR</b><b class="avatar a2">JT</b><b class="avatar a3">AK</b><b class="avatar a4">TB</b></span><span>Built for the way you follow the game.</span></div><div class="review-badges" aria-label="Demo dataset coverage"><span><b class="google-g">⚽</b> <strong>8</strong> Matches</span><span><b class="trust-star">◇</b> <strong>4</strong> Leagues</span><span><b class="mini-spark">✧</b> <strong>100%</strong> Virtual</span></div></div>
      </div>
      <div class="studio-stage" id="library">
        <div class="stage-label"><span><i></i> EVERY MATCH TELLS A STORY</span><span>01 / THE MATCH CENTRE</span></div>
        <div class="floating-card collaborator-card" data-float><div class="floating-person"><span class="avatar a1">BC</span><div><strong>Barcelona VFC</strong><span>Virtual Champions</span></div><span class="online-dot" aria-label="Simulated live match"></span></div><p>68′ — Silva finds the net. Barcelona take the lead.</p><div class="comment-file"><span aria-hidden="true">⚽</span> BAR 2 : 1 DOR <span class="approval">LIVE DEMO</span></div></div>
        <div class="floating-card activity-card" data-float><div class="activity-heading"><span class="mini-spark">✧</span><span>Match momentum</span></div><strong>Every pass.<br>More <em>insight.</em></strong><div class="activity-bars" aria-hidden="true"></div><span class="activity-foot">READ THE RHYTHM OF THE GAME</span></div>
        <div class="dashboard-shell"><div class="dashboard">
          <aside class="sidebar" aria-label="Football navigation">
            <div class="workspace-brand"><span class="workspace-icon">W</span><div>Winmix Analytics<small>Virtual football workspace</small></div></div>
            <div class="sidebar-label">WORKSPACE</div>
            <details class="side-group" open><summary class="side-item"><span data-icon="library"></span> Dashboard <span class="workspace-chevron">⌄</span></summary><div class="side-submenu"><button class="side-item" data-go="clubs">Club summary</button><button class="side-item" data-go="championships">Championships</button><button class="side-item" data-go="standings">League overview</button><button class="side-item" data-go="statistics">Statistics</button></div></details>
            <details class="side-group" open><summary class="side-item"><span data-icon="ball"></span> Matches <span class="workspace-chevron">⌄</span></summary><div class="side-submenu"><button class="side-item selected" data-go="matches">Match centre <span class="item-count">8</span></button><button class="side-item" data-go="lineups">Match overview</button><button class="side-item" data-go="favorites">Watchlist</button></div></details>
            <div class="sidebar-divider"></div><button class="side-item" data-go="profile"><span data-icon="users"></span> Profile</button><button class="side-item" data-go="settings"><span data-icon="sliders"></span> Settings</button>
            <div class="sidebar-bottom"><div class="plan-card"><span>Match coverage</span><strong>8 <small>/ 8 fixtures</small></strong><div class="usage-bar"><i style="width:100%"></i></div><span class="demo-label">Simulated dataset · 22 Sep</span></div><button class="user-profile profile-button" data-go="profile"><span class="avatar a4">WA</span><span>Winmix Analyst<small>Budapest, Hungary</small></span></button></div>
          </aside>
          <div class="library-content">
            <div class="library-topline"><span>Winmix <span class="breadcrumb-slash">/</span> <span id="breadcrumb-current">Match centre</span></span><div class="header-controls"><button id="theme-toggle" class="header-control" title="Switch dashboard contrast" aria-label="Switch dashboard contrast" aria-pressed="false"><span data-icon="sun"></span></button><button id="rtl-toggle" class="header-control" aria-label="Right-to-left layout" aria-pressed="false">RTL</button><label class="font-control" title="Dashboard text size">Aa<input id="font-size" type="range" min="100" max="120" step="5" value="100" aria-label="Dashboard text size"></label><span class="demo-indicator">SIMULATED DATA</span></div></div>
            <div class="library-heading"><div><h2 id="library-title">Match centre<span class="title-dot">.</span></h2><p id="view-description">Every fixture. Every detail. All in one place.</p></div><button class="button small-button" id="tour-library-button" aria-label="Take the Winmix tour"><span data-icon="sparkles"></span> Take a tour</button></div>
            <div class="mobile-view-control"><label for="mobile-view">View</label><select id="mobile-view"><option value="matches">Match centre</option><option value="favorites">Watchlist</option><option value="clubs">Club summary</option><option value="championships">Championships</option><option value="standings">League table</option><option value="statistics">Statistics</option><option value="lineups">Match overview</option><option value="profile">Profile</option><option value="settings">Settings</option></select></div>
            <div class="library-toolbar" id="match-toolbar"><div class="tabs" role="tablist" aria-label="Match status"><button role="tab" aria-selected="true" data-tab="all" id="tab-all" aria-controls="match-panel">All <span>8</span></button><button role="tab" aria-selected="false" data-tab="Live" tabindex="-1" aria-controls="match-panel">Live</button><button role="tab" aria-selected="false" data-tab="Finished" tabindex="-1" aria-controls="match-panel">Finished</button></div><div class="library-tools"><label class="search-field"><span data-icon="search"></span><input id="match-search" type="search" placeholder="Find a team" aria-label="Search matches"><kbd>/</kbd></label><button class="filter-button" id="filter-button" aria-label="Filter matches" aria-expanded="false" aria-controls="filter-panel"><span data-icon="sliders"></span></button></div></div>
            <div class="filter-panel" id="filter-panel" hidden><label>League<select id="league-filter"><option value="all">All leagues</option><option>Virtual La Liga</option><option>Virtual Premier</option><option>Virtual Bundesliga</option><option>Virtual Serie A</option></select></label><label>Date<input id="date-filter" type="date" min="2026-09-22" max="2026-09-24" value="2026-09-22"></label><button id="reset-filters">Reset</button></div>
            <div class="track-panel" id="match-panel" role="tabpanel" aria-label="Matches"><table class="track-table match-table"><thead><tr><th class="number-col">#</th><th>MATCH</th><th class="date-col">LEAGUE</th><th class="duration-col">SCORE</th><th class="visibility-col">STATUS</th><th class="favorite-col"><span class="sr-only">Watchlist</span></th></tr></thead><tbody id="match-rows"></tbody></table><div class="empty-state" id="empty-state" hidden><span data-icon="search"></span><strong>No matches found</strong><p>Try another club, date or league.</p><button class="button secondary" id="empty-reset">Show all matches</button></div></div>
            <div id="aux-panel" class="aux-panel" hidden></div>
            <div class="player match-summary-strip" id="match-strip"><button class="now-playing match-strip-link" id="selected-match-button" aria-label="Open selected match"><span class="cover cover-0" id="selected-cover">BC</span><span><strong id="selected-match-title">Barcelona · Dortmund</strong><small id="selected-match-comment">68′ · Silva scores from close range</small></span></button><div class="strip-timeline"><span id="selected-minute">68′</span><div class="mini-timeline" id="strip-events" aria-label="Match event timeline"></div><strong id="selected-score">2 : 1</strong></div><button class="transport" id="next-match" aria-label="Next match"><span data-icon="next"></span></button></div>
          </div>
        </div></div>
        <div class="stage-footer"><span><span data-icon="ball"></span> Every angle of the virtual game.</span><span>EXPLORE THE INTERACTIVE DEMO <span aria-hidden="true">↗</span></span></div>
      </div>
    </section>
    <section class="features section-frame" id="features" aria-labelledby="features-title"><div class="section-heading"><div><span class="eyebrow">BUILT FOR YOUR FOOTBALL INTELLIGENCE</span><h2 id="features-title">More than a score.<br><span>The whole picture.</span></h2></div><p>From the first whistle to the final result.<br>Understand what happens between the goals.</p></div><div class="feature-grid"><article class="feature-card"><div class="feature-number">01 <span data-icon="sparkles"></span></div><div class="feature-art" id="feature-momentum" aria-hidden="true"></div><h3>Read the momentum.</h3><p>Follow possession, shots and attacking pressure. See how the balance of a match changes.</p><a href="#library">Explore match statistics <span aria-hidden="true">↗</span></a></article><article class="feature-card"><div class="feature-number">02 <span data-icon="library"></span></div><div class="feature-art collection-art" aria-hidden="true"><div><span class="collection-dot purple"></span> Barcelona VFC <span>24 PTS</span></div><div><span class="collection-dot emerald"></span> Dortmund VFC <span>22 PTS</span></div></div><h3>Every club, in context.</h3><p>Compare club form and league positions. Put every result into the bigger picture.</p><a href="#library" data-go="standings">Explore the league table <span aria-hidden="true">↗</span></a></article><article class="feature-card"><div class="feature-number">03 <span data-icon="users"></span></div><div class="feature-art team-art" aria-hidden="true"><span class="avatar a1">BC</span><span class="team-line"></span><span class="team-check">VS</span><span class="team-line"></span><span class="avatar a4">DO</span><small>Two teams. Every detail.</small></div><h3>Know the starting eleven.</h3><p>Explore formations, player roles and match events. See the game from the pitch up.</p><a href="#library" data-go="lineups">Explore the lineups <span aria-hidden="true">↗</span></a></article></div></section>
    <section class="closing section-frame"><i class="bracket tl" aria-hidden="true"></i><i class="bracket br" aria-hidden="true"></i><div><span class="eyebrow">SEE WHAT THE NUMBERS SAY</span><h2>Your next match.<br>A clearer perspective.</h2></div><a class="button primary" href="#library">Explore Winmix <span aria-hidden="true">↗</span></a></section>
  </main>
  <footer class="site-footer"><a class="brand" href="#main"><span class="brand-icon">W</span> winmix</a><span>Virtual football. Real perspective.</span><span>© 2026 Winmix</span></footer>
  <dialog class="tour-dialog" id="tour-dialog" aria-labelledby="tour-title"><button class="dialog-close" aria-label="Close tour">×</button><span class="eyebrow" id="tour-step-label">THE WINMIX TOUR · 01 / 03</span><div class="tour-visual" id="tour-visual" aria-hidden="true"></div><h2 id="tour-title">Every fixture, in focus.</h2><p id="tour-description">Explore the demo match centre, compare club form, and open a fixture for lineups and statistics.</p><div class="tour-bottom"><div class="tour-dots" aria-hidden="true"><i class="active"></i><i></i><i></i></div><button class="button primary" id="tour-next">Next <span aria-hidden="true">→</span></button></div></dialog>
  <dialog class="tour-dialog match-dialog" id="match-dialog" aria-labelledby="match-dialog-title"><button class="dialog-close" aria-label="Close match details">×</button><span class="eyebrow">WINMIX · SIMULATED MATCH</span><h2 id="match-dialog-title">Match summary</h2><div id="match-detail"></div></dialog>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
<script>
const iconPaths={library:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/><circle cx="9" cy="7" r="4"/>',sparkles:'<path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3ZM20 2v4M18 4h4"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',sliders:'<path d="M4 7h8M16 7h4M4 17h3M11 17h9"/><circle cx="14" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',play:'<path d="m8 4 12 8-12 8Z" fill="currentColor" stroke-width="0"/>',pause:'<path d="M8 5v14M16 5v14" stroke-width="4"/>',previous:'<path d="M5 5v14m14-14L7 12l12 7Z" fill="currentColor"/>',next:'<path d="M19 5v14M5 5l12 7-12 7Z" fill="currentColor"/>',volume:'<path d="m11 4-6 5H2v6h3l6 5V4ZM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',muted:'<path d="m11 4-6 5H2v6h3l6 5V4Zm5 5 6 6m0-6-6 6"/>',headphones:'<path d="M3 14v-3a9 9 0 0 1 18 0v3"/><rect x="3" y="12" width="4" height="9" rx="2"/><rect x="17" y="12" width="4" height="9" rx="2"/>'};

Object.assign(iconPaths,{ball:'<circle cx="12" cy="12" r="9"/><path d="m12 7 5 3-2 6H9l-2-6 5-3ZM12 3v4M3 10l4 1m14-1-4 1M7 20l2-4m8 4-2-4"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',trophy:'<path d="M8 3h8v5a4 4 0 0 1-8 0V3Zm0 2H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4m-4 0v6m-4 3h8m-6-3h4"/>',chart:'<path d="M3 3v18h18M7 14l4-5 4 3 5-7"/>',field:'<rect x="3" y="2" width="18" height="20" rx="1"/><path d="M3 12h18M8 2v5h8V2M8 22v-5h8v5"/><circle cx="12" cy="12" r="3"/>'});
const icon=name=>`<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]||iconPaths.ball}</svg>`;
const $=s=>document.querySelector(s);
const fillIcons=(root=document)=>root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
const clubs=[['Barcelona','BC','Barcelona, Spain','Virtual Champions'],['Dortmund','DO','Dortmund, Germany','Virtual Champions'],['Liverpool','LI','Liverpool, England','Virtual Premier'],['Arsenal','AR','London, England','Virtual Premier'],['Bayern','BY','Munich, Germany','Virtual Bundesliga'],['Leipzig','LP','Leipzig, Germany','Virtual Bundesliga'],['Juventus','JU','Turin, Italy','Virtual Serie A'],['Milan','MI','Milan, Italy','Virtual Serie A'],['Real Madrid','RM','Madrid, Spain','Virtual Champions'],['Atlético','AT','Madrid, Spain','Virtual Champions'],['Man. City','MC','Manchester, England','Virtual Premier'],['Man. United','MU','Manchester, England','Virtual Premier'],['Leverkusen','LV','Leverkusen, Germany','Virtual Bundesliga'],['Wolfsburg','WO','Wolfsburg, Germany','Virtual Bundesliga'],['Inter','IN','Milan, Italy','Virtual Serie A'],['Napoli','NA','Naples, Italy','Virtual Serie A']].map((c,id)=>({id,name:c[0],short:c[1],location:c[2],league:c[3],w:8-id%5,d:id%3,l:10-(8-id%5)-id%3,gf:24-id%10,ga:8+id%7,pts:(8-id%5)*3+id%3}));
const games=[
 {id:0,home:0,away:1,score:[2,1],minute:68,status:'Live',league:'Virtual Champions',group:'A',round:'Quarter-final',comment:'Silva scores from close range.',events:[[18,'home','Costa'],[42,'away','Weber'],[68,'home','Silva']],possession:58},
 {id:1,home:2,away:3,score:[1,1],minute:54,status:'Live',league:'Virtual Premier',group:'B',round:'Group stage',comment:'Arsenal build an attack down the right.',events:[[12,'home','Reed'],[39,'away','Cole']],possession:51},
 {id:2,home:4,away:5,score:[3,0],minute:90,status:'Finished',league:'Virtual Bundesliga',group:'C',round:'Group stage',comment:'Full time. Bayern keep a clean sheet.',events:[[11,'home','Brandt'],[47,'home','Klein'],[75,'home','Brandt']],possession:64},
 {id:3,home:6,away:7,score:[0,1],minute:81,status:'Live',league:'Virtual Serie A',group:'D',round:'Group stage',comment:'Milan defend a narrow lead.',events:[[59,'away','Rossi']],possession:46},
 {id:4,home:8,away:9,score:[2,2],minute:90,status:'Finished',league:'Virtual Champions',group:'A',round:'Quarter-final',comment:'Full time. The Madrid derby ends level.',events:[[9,'home','Santos'],[31,'away','Vega'],[64,'home','Santos'],[83,'away','Ruiz']],possession:55},
 {id:5,home:10,away:11,score:[2,0],minute:37,status:'Live',league:'Virtual Premier',group:'B',round:'Group stage',comment:'City control possession in midfield.',events:[[14,'home','Miles'],[29,'home','Stone']],possession:62},
 {id:6,home:12,away:13,score:[1,0],minute:90,status:'Finished',league:'Virtual Bundesliga',group:'C',round:'Group stage',comment:'Full time. Leverkusen take three points.',events:[[67,'home','Becker']],possession:54},
 {id:7,home:14,away:15,score:[1,3],minute:90,status:'Finished',league:'Virtual Serie A',group:'D',round:'Group stage',comment:'Full time. Napoli finish strongly.',events:[[16,'away','Marino'],[34,'home','Ricci'],[63,'away','Marino'],[86,'away','Moretti']],possession:44}
];
let view='matches',statusFilter='all',activeId=0,clubId=0,half=1,teamSide='home',group='A',round='all',detailTab='summary';
let followed=new Set([1,4]),toastTimer;
const badge=(id,size='')=>`<span class="club-badge cover-${id%8} ${size}" aria-hidden="true">${clubs[id].short}</span>`;
const score=g=>g.score.join(' : ');
const gameTitle=g=>`${clubs[g.home].name} · ${clubs[g.away].name}`;
const descriptions={matches:['Match centre','Every fixture. Every detail. All in one place.'],favorites:['Watchlist','The fixtures you want to keep close.'],clubs:['Club summary','Form, players and the numbers behind the badge.'],championships:['Championships','Follow groups, knockout rounds and matchdays.'],standings:['League overview','Every result has its place in the table.'],statistics:['Statistics','Compare the patterns behind the scoreline.'],lineups:['Match overview','Two teams. Every player. Every moment.'],profile:['Your profile','Your football workspace, set up for you.'],settings:['Settings','Make the match centre comfortable to read.']};
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2600)}
function switchView(next){if(!descriptions[next])return;view=next;const [title,desc]=descriptions[view];$('#library-title').innerHTML=`${title}<span class="title-dot">.</span>`;$('#breadcrumb-current').textContent=title;$('#view-description').textContent=desc;$('#mobile-view').value=view;document.querySelectorAll('.sidebar [data-go]').forEach(b=>b.classList.toggle('selected',b.dataset.go===view));const isMatches=['matches','favorites'].includes(view);$('#match-panel').hidden=!isMatches;$('#match-toolbar').hidden=!isMatches;$('#aux-panel').hidden=isMatches;if(!isMatches){$('#filter-panel').hidden=true;$('#filter-button').setAttribute('aria-expanded','false');renderAux()}else renderMatches();fillIcons()}
function renderMatches(){const q=$('#match-search').value.trim().toLowerCase(),league=$('#league-filter').value,date=$('#date-filter').value;const list=games.filter(g=>(view!=='favorites'||followed.has(g.id))&&(statusFilter==='all'||g.status===statusFilter)&&(league==='all'||g.league===league)&&date==='2026-09-22'&&`${gameTitle(g)} ${g.league}`.toLowerCase().includes(q));$('#match-rows').innerHTML=list.map((g,i)=>`<tr class="${activeId===g.id?'active-track':''}"><td class="number-col"><button class="row-play" data-open="${g.id}" aria-label="Open ${gameTitle(g)}">${String(i+1).padStart(2,'0')}</button></td><td><button class="track-info match-row-button" data-open="${g.id}" aria-label="Open ${gameTitle(g)}"><span class="badge-pair">${badge(g.home)}${badge(g.away)}</span><span class="track-copy"><strong>${clubs[g.home].name} <span class="versus">vs</span> ${clubs[g.away].name}</strong><small>${g.status==='Live'?g.minute+'′ · ':''}${g.comment}</small></span></button></td><td class="date-cell">${g.league.replace('Virtual ','V. ')}</td><td class="score-cell">${score(g)}</td><td><span class="visibility-tag ${g.status==='Live'?'public':''}">${g.status==='Live'?g.minute+'′ Live':'FT'}</span></td><td><button class="favorite-button" data-follow="${g.id}" aria-pressed="${followed.has(g.id)}" aria-label="${followed.has(g.id)?'Unfollow':'Follow'} ${gameTitle(g)}">${icon('heart')}</button></td></tr>`).join('');$('.match-table').hidden=!list.length;$('#empty-state').hidden=!!list.length;updateStrip()}
function updateStrip(){const g=games[activeId];$('#selected-cover').className=`cover cover-${g.home%8}`;$('#selected-cover').textContent=clubs[g.home].short;$('#selected-match-title').textContent=gameTitle(g);$('#selected-match-comment').textContent=`${g.status==='Live'?g.minute+'′':'FT'} · ${g.comment}`;$('#selected-minute').textContent=g.status==='Live'?g.minute+'′':'FT';$('#selected-score').textContent=score(g);$('#strip-events').innerHTML=`<i class="timeline-progress" style="width:${g.minute/90*100}%"></i>${g.events.map(e=>`<span class="timeline-goal ${e[1]}" style="left:${e[0]/90*100}%" title="${e[0]}′ ${e[2]}"></span>`).join('')}`;$('#selected-match-button').setAttribute('aria-label',`Open ${gameTitle(g)}`)}
function toggleFollow(id){followed.has(id)?followed.delete(id):followed.add(id);renderMatches();toast(followed.has(id)?'Match added to your watchlist':'Match removed from your watchlist')}
function resetFilters(){statusFilter='all';$('#match-search').value='';$('#league-filter').value='all';$('#date-filter').value='2026-09-22';updateStatusTabs();switchView('matches')}
function updateStatusTabs(){document.querySelectorAll('[data-tab]').forEach(b=>{const selected=b.dataset.tab===statusFilter;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1})}
function chartArea(label='Ball possession',a=58,b=42){const p1='M0 74C35 65 46 22 83 30S135 72 166 46S218 10 250 37S301 72 332 36S391 19 430 39';const p2='M0 42C35 36 50 61 83 68S133 14 166 26S215 71 250 61S295 11 332 22S390 75 430 52';return `<div class="area-chart" role="img" aria-label="${label}: home ${a}%, away ${b}%"><svg viewBox="0 0 430 100" preserveAspectRatio="none"><path d="${p1}V100H0Z" fill="#a855f726"/><path d="${p1}" stroke="#b78ae5" fill="none" stroke-width="2"/><path d="${p2}" stroke="#58bd9c" fill="none" stroke-width="2"/><path d="M0 25H430M0 50H430M0 75H430" stroke="#ffffff09" stroke-dasharray="3 5"/></svg><div class="chart-axis"><span>0′</span><span>15′</span><span>30′</span><span>HT</span><span>60′</span><span>75′</span><span>90′</span></div></div>`}
function donut(c){return `<div class="donut-wrap"><div class="donut" style="background:conic-gradient(#a877da 0 ${c.w*10}%,#58b99b ${c.w*10}% ${(c.w+c.d)*10}%,#53475f ${(c.w+c.d)*10}% 100%)" role="img" aria-label="${c.w} wins, ${c.d} draws, ${c.l} losses"><div><strong>10</strong><small>MATCHES</small></div></div><div class="chart-legend"><span><i class="purple"></i>${c.w} Wins</span><span><i class="emerald"></i>${c.d} Draws</span><span><i class="loss"></i>${c.l} Losses</span></div></div>`}
function radar(g){const home=[g.possession,67,50,65,72,60],away=[100-g.possession,48,73,55,58,69];const point=(i,v)=>{const angle=(i*60-90)*Math.PI/180;return `${130+Math.cos(angle)*v*.82},${104+Math.sin(angle)*v*.82}`};return `<div class="radar-chart" role="img" aria-label="Team comparison of possession, shots, passes, corners, saves and attacks"><svg viewBox="0 0 260 215">${[25,50,75,100].map(v=>`<polygon points="${home.map((_,i)=>point(i,v)).join(' ')}" fill="none" stroke="#ffffff0d"/>`).join('')}${home.map((_,i)=>`<path d="M130 104L${point(i,100)}" stroke="#ffffff0b"/>`).join('')}<polygon points="${home.map((v,i)=>point(i,v)).join(' ')}" fill="#a855f724" stroke="#be90ea" stroke-width="2"/><polygon points="${away.map((v,i)=>point(i,v)).join(' ')}" fill="#10b9810e" stroke="#61bda1" stroke-width="2"/><g fill="#94859f" font-size="10" text-anchor="middle"><text x="130" y="12">POSSESSION</text><text x="220" y="59">SHOTS</text><text x="222" y="157">PASSES</text><text x="130" y="207">CORNERS</text><text x="39" y="157">SAVES</text><text x="39" y="59">ATTACKS</text></g></svg></div>`}
function teamSelector(){return `<label class="compact-select">Match<select id="analysis-match">${games.map(g=>`<option value="${g.id}" ${g.id===activeId?'selected':''}>${gameTitle(g)}</option>`).join('')}</select></label>`}
const playerNames=['Navarro','Costa','Meyer','Duarte','Weber','Santos','Reed','Klein','Silva','Cole','Rossi'];
function lineup(id,compact=false){const nums=[1,2,4,5,3,6,8,10,7,9,11],points=[[50,87],[17,67],[39,71],[62,71],[83,67],[30,47],[69,47],[50,32],[17,17],[50,12],[83,17]];return `<div class="lineup-pitch ${compact?'compact-pitch':''}" role="img" aria-label="${clubs[id].name} 4-3-3 formation"><div class="pitch-centre"></div><div class="penalty top"></div><div class="penalty bottom"></div>${points.map(([x,y],i)=>`<span class="pitch-player" style="left:${x}%;top:${y}%"><b class="cover-${id%8}">${nums[i]}</b><small>${playerNames[(i+id)%11]}</small></span>`).join('')}<span class="formation-label">4 — 3 — 3</span></div>`}
function statBars(g){const pairs=[['Goals',g.score[0],g.score[1]],['Shots',12+g.id,8+g.id%3],['On target',6+g.id%3,3+g.id%2],['Corners',7,4],['Passes',426+g.id*9,358+g.id*7]];return `<div class="stat-bars">${pairs.map(([name,a,b])=>`<div class="stat-comparison"><div><strong>${a}</strong><span>${name}</span><strong>${b}</strong></div><div class="double-bar"><i style="width:${a+b?a/(a+b)*100:50}%"></i><b style="width:${a+b?b/(a+b)*100:50}%"></b></div></div>`).join('')}</div>`}
function timeline(g){return `<div class="full-timeline"><div class="timeline-caption"><strong>${g.status==='Live'?g.minute+'′':'FULL TIME'}</strong><span>${g.comment}</span></div><div class="event-line"><i style="width:${g.minute/90*100}%"></i>${g.events.map(e=>`<button data-goal-minute="${e[0]}" style="left:${e[0]/90*100}%" aria-label="${e[0]} minute goal by ${e[2]}">⚽<small>${e[0]}′</small></button>`).join('')}</div><div class="chart-axis"><span>KICK-OFF</span><span>HALF TIME</span><span>90′</span></div></div>`}
function gameHeader(g){return `<div class="game-header"><div>${badge(g.home,'large')}<strong>${clubs[g.home].name}</strong><small>${clubs[g.home].location}</small></div><div class="game-score"><span class="visibility-tag ${g.status==='Live'?'public':''}">${g.status==='Live'?'LIVE DEMO · '+g.minute+'′':'FULL TIME'}</span><strong>${score(g)}</strong><small>${g.league}</small></div><div>${badge(g.away,'large')}<strong>${clubs[g.away].name}</strong><small>${clubs[g.away].location}</small></div></div>`}
function chipTabs(items,attr,current){return `<div class="chip-tabs">${items.map(([key,label])=>`<button ${attr}="${key}" class="${key===current?'active':''}" aria-pressed="${key===current}">${label}</button>`).join('')}</div>`}
function renderAux(){const el=$('#aux-panel'),g=games[activeId],c=clubs[clubId];
if(view==='statistics'){el.innerHTML=`<div class="panel-top">${teamSelector()}${chipTabs([['1','First half'],['2','Second half']],'data-half',String(half))}</div><div class="metric-strip"><div><small>Possession</small><strong>${g.possession-(half===1?3:0)}<em>%</em></strong></div><div><small>Total attempts</small><strong>${half===1?7:12+g.id}</strong></div><div><small>Pass accuracy</small><strong>${half===1?86:89}<em>%</em></strong></div><div><small>Avg. sprint</small><strong>${half===1?'25.6':'27.8'}<em>km/h</em></strong></div></div><div class="analytics-grid"><article class="data-card"><h3>Team comparison</h3>${radar(g)}<div class="chart-legend"><span><i class="purple"></i>${clubs[g.home].name}</span><span><i class="emerald"></i>${clubs[g.away].name}</span></div></article><article class="data-card"><h3>Match statistics</h3>${statBars(g)}</article><article class="data-card wide"><div class="card-heading"><h3>Ball possession</h3><span>${g.possession}% / ${100-g.possession}%</span></div>${chartArea('Ball possession',g.possession,100-g.possession)}</article><article class="data-card"><h3>Active actions</h3><div class="actions-chart" role="img" aria-label="Active actions by position, half ${half}">${['GK','LB','CB','CB','RB','CM','CM','CAM','LW','RW','ST'].map((p,i)=>`<div><i style="height:${30+(i*19+half*13)%70}%"></i><small>${p}</small></div>`).join('')}</div></article><article class="data-card"><h3>Field presence</h3><div class="heat-pitch" role="img" aria-label="Higher activity in the right attacking channel"><div></div><i></i></div></article></div>`}
else if(view==='clubs'){el.innerHTML=`<div class="club-picker">${clubs.map(x=>`<button data-club="${x.id}" class="${x.id===clubId?'active':''}" aria-label="View ${x.name}">${badge(x.id)}<span>${x.name}</span></button>`).join('')}</div><div class="club-hero data-card"><div>${badge(c.id,'large')}<span><h3>${c.name} VFC</h3><p>${c.location}</p><small>${c.league}</small></span></div><div class="club-wdl"><span><strong>${c.w}</strong>WINS</span><span><strong>${c.d}</strong>DRAWS</span><span><strong>${c.l}</strong>LOSSES</span></div></div><div class="analytics-grid"><article class="data-card"><h3>Recent form</h3>${donut(c)}</article><article class="data-card"><h3>Starting eleven</h3>${lineup(c.id,true)}</article><article class="data-card wide"><div class="card-heading"><h3>Player roster</h3><span>4–3–3 · Virtual squad</span></div><div class="roster">${playerNames.map((n,i)=>`<div><span class="roster-number">${[1,2,4,5,3,6,8,10,7,9,11][i]}</span><span class="avatar a${i%4+1}">${n.slice(0,2).toUpperCase()}</span><strong>${n}</strong><small>${i===0?'Goalkeeper':i<5?'Defender':i<8?'Midfielder':'Forward'}</small></div>`).join('')}</div></article><article class="data-card stadium-info"><h3>Winmix Arena</h3><strong>42,850</strong><p>Virtual attendance</p><small>18.1°C · Clear sky · Demo conditions</small></article><article class="data-card"><h3>Head coach</h3><div class="coach-profile"><span class="avatar a3">AM</span><div><strong>Alex Morgan</strong><small>Virtual squad manager</small></div></div><p>High press · possession play</p><div class="mini-metrics"><span>Formation <b>4–3–3</b></span><span>Club position <b>${[...clubs].filter(x=>x.league===c.league).sort((a,b)=>b.pts-a.pts).findIndex(x=>x.id===c.id)+1}</b></span></div></article></div>`}
else if(view==='standings'){const league=$('#standings-league')?.value||'all';el.innerHTML=`<div class="panel-top"><label class="compact-select">Competition<select id="standings-league"><option value="all">All virtual clubs</option>${[...new Set(clubs.map(c=>c.league))].map(l=>`<option ${l===league?'selected':''}>${l}</option>`).join('')}</select></label><span class="panel-note">DEMO SEASON · 10 MATCHES PLAYED</span></div><div id="standings-body"></div><article class="data-card"><h3>Championship position</h3>${chartArea('Relative club position trend')}</article>`;renderStandings(league)}
else if(view==='championships'){el.innerHTML=`<div class="panel-top"><span class="panel-note">VIRTUAL EUROPEAN CHAMPIONSHIP</span><label class="compact-select">Round<select id="round-select"><option value="all">All rounds</option><option ${round==='Group stage'?'selected':''}>Group stage</option><option ${round==='Quarter-final'?'selected':''}>Quarter-final</option><option ${round==='Semi-final'?'selected':''}>Semi-final</option><option ${round==='Final'?'selected':''}>Final</option></select></label></div>${chipTabs('ABCDEFG'.split('').map(x=>[x,'Group '+x]),'data-group',group)}<div class="matchday-strip"><label>Matchday<input type="date" id="champ-date" value="${$('#date-filter').value}" min="2026-09-01" max="2026-09-30"></label><span>September 2026 · demo schedule</span></div><div class="calendar-days">${[19,20,21,22,23,24,25].map(d=>`<button data-day="${d}" class="${$('#date-filter').value===`2026-09-${d}`?'active':''}"><small>${['SAT','SUN','MON','TUE','WED','THU','FRI'][d-19]}</small><strong>${d}</strong>${d===22?'<i></i>':''}</button>`).join('')}</div><div id="group-fixtures"></div>`;renderGroup()}
else if(view==='lineups'){el.innerHTML=`<div class="panel-top">${teamSelector()}</div>${gameHeader(g)}${timeline(g)}${chipTabs([['home',clubs[g.home].name],['away',clubs[g.away].name]],'data-team',teamSide)}<div class="analytics-grid"><article class="data-card"><h3>Starting line-up</h3>${lineup(g[teamSide])}</article><article class="data-card"><h3>Goals & match events</h3>${eventList(g)}<div class="match-note">Select a timeline marker to inspect a goal.</div></article></div>`}
else if(view==='profile'){el.innerHTML=`<article class="data-card profile-card"><span class="avatar a4">WA</span><h3>Winmix Analyst</h3><p>Budapest, Hungary</p><span class="visibility-tag">DEMO PROFILE</span><div class="metric-strip"><div><small>Following</small><strong>${followed.size}</strong></div><div><small>Competitions</small><strong>4</strong></div><div><small>Matchday</small><strong>22<em>Sep</em></strong></div></div><button class="button secondary" data-go="favorites">Open your watchlist ↗</button></article><article class="data-card"><h3>Your football workspace</h3><p>Keep selected matches close with the heart button. Your demo watchlist lasts for this page session.</p></article>`}
else if(view==='settings'){el.innerHTML=`<article class="data-card settings-card"><h3>Display preferences</h3><div><span><strong>Dashboard contrast</strong><small>Choose the regular or brighter glass surface.</small></span><button class="button secondary" id="settings-theme">${$('.dashboard').classList.contains('dim-theme')?'Brighter':'Original'}</button></div><div><span><strong>Reading direction</strong><small>Change the dashboard layout direction.</small></span><button class="button secondary" id="settings-rtl">${$('.dashboard').dir==='rtl'?'Right to left':'Left to right'}</button></div><div><label for="settings-font"><strong>Text size</strong><small>Make dashboard labels more comfortable.</small></label><input id="settings-font" type="range" min="100" max="120" step="5" value="${$('#font-size').value}"></div><button class="button secondary" id="reset-display">Reset display preferences</button></article><article class="data-card"><h3>About this dataset</h3><p>All fixtures, scores, player names, statistics, attendance and weather are simulated examples. They are not live sporting results. No external feed is connected.</p></article>`}
fillIcons(el);}
function renderStandings(league){const list=clubs.filter(c=>league==='all'||c.league===league).sort((a,b)=>b.pts-a.pts||b.gf-b.ga-(a.gf-a.ga));$('#standings-body').innerHTML=`<table class="standings-table"><thead><tr><th>#</th><th>CLUB</th><th>W</th><th>D</th><th>L</th><th class="goals-column">GF</th><th class="goals-column">GA</th><th>PTS</th></tr></thead><tbody>${list.map((c,i)=>`<tr><td>${i+1}</td><td><button data-club="${c.id}">${badge(c.id)}<strong>${c.name}</strong></button></td><td>${c.w}</td><td>${c.d}</td><td>${c.l}</td><td class="goals-column">${c.gf}</td><td class="goals-column">${c.ga}</td><td class="points">${c.pts}</td></tr>`).join('')}</tbody></table>`}
function renderGroup(){const date=$('#date-filter').value;const list=games.filter(g=>g.group===group&&(round==='all'||g.round===round)&&date==='2026-09-22');$('#group-fixtures').innerHTML=list.length?`<div class="fixture-grid">${list.map(g=>`<button class="fixture-card data-card" data-open="${g.id}"><span>${badge(g.home)}<strong>${clubs[g.home].name}</strong></span><span class="fixture-score">${score(g)}<small>${g.status==='Live'?g.minute+'′ LIVE DEMO':'FULL TIME'}</small></span><span>${badge(g.away)}<strong>${clubs[g.away].name}</strong></span><small>${g.round} · Group ${g.group}</small></button>`).join('')}</div>`:'<div class="empty-state"><strong>No fixtures in this selection</strong><p>The demo includes Groups A–D on 22 September.</p><button class="button secondary" id="reset-schedule">View demo fixtures</button></div>'}
function eventList(g){return `<ol class="event-list">${g.events.map(([minute,side,name])=>`<li data-event="${minute}"><b>${minute}′</b><span>⚽</span><div><strong>${name}</strong><small>${clubs[g[side]].name} · Goal</small></div></li>`).join('')}</ol>`}
function openMatch(id){activeId=id;detailTab='summary';teamSide='home';renderMatches();renderDetail();$('#match-dialog').showModal()}
function renderDetail(){const g=games[activeId];$('#match-dialog-title').textContent=gameTitle(g);$('#match-detail').innerHTML=`${gameHeader(g)}${chipTabs([['summary','Summary'],['lineups','Lineups'],['goals','Goals'],['statistics','Statistics']],'data-detail-tab',detailTab)}<div class="detail-content">${detailTab==='summary'?`${timeline(g)}${statBars(g)}`:detailTab==='lineups'?`${chipTabs([['home',clubs[g.home].name],['away',clubs[g.away].name]],'data-detail-team',teamSide)}${lineup(g[teamSide])}`:detailTab==='goals'?eventList(g):`<div class="analytics-grid"><article class="data-card"><h3>Team comparison</h3>${radar(g)}</article><article class="data-card"><h3>Match statistics</h3>${statBars(g)}</article><article class="data-card wide"><h3>Ball possession</h3>${chartArea('Ball possession',g.possession,100-g.possession)}</article></div>`}</div>`}
function changeTheme(){const dim=$('.dashboard').classList.toggle('dim-theme');$('#theme-toggle').setAttribute('aria-pressed',String(dim));if(view==='settings')renderAux()}
function changeDirection(){const rtl=$('.dashboard').dir!=='rtl';$('.dashboard').dir=rtl?'rtl':'ltr';$('#rtl-toggle').setAttribute('aria-pressed',String(rtl));if(view==='settings')renderAux()}
function changeFont(value){$('#font-size').value=value;$('.dashboard').style.setProperty('--ui-scale',Number(value)/100);if($('#settings-font'))$('#settings-font').value=value}
document.addEventListener('click',e=>{
 const b=e.target.closest('button,a');if(!b)return;
 if(b.dataset.go){switchView(b.dataset.go);return}
 if(b.dataset.open!==undefined){openMatch(Number(b.dataset.open));return}
 if(b.dataset.follow!==undefined){toggleFollow(Number(b.dataset.follow));return}
 if(b.dataset.tab){statusFilter=b.dataset.tab;updateStatusTabs();renderMatches();return}
 if(b.dataset.club!==undefined){clubId=Number(b.dataset.club);switchView('clubs');return}
 if(b.dataset.half){half=Number(b.dataset.half);renderAux();return}
 if(b.dataset.team){teamSide=b.dataset.team;renderAux();return}
 if(b.dataset.detailTab){detailTab=b.dataset.detailTab;renderDetail();return}
 if(b.dataset.detailTeam){teamSide=b.dataset.detailTeam;renderDetail();return}
 if(b.dataset.group){group=b.dataset.group;renderAux();return}
 if(b.dataset.day){$('#date-filter').value=`2026-09-${b.dataset.day}`;renderAux();return}
 if(b.dataset.goalMinute){const goal=games[activeId].events.find(x=>String(x[0])===b.dataset.goalMinute);toast(`${goal[0]}′ — ${goal[2]} scores for ${clubs[games[activeId][goal[1]]].name}`);return}
 if(b.id==='reset-schedule'){group='A';round='all';$('#date-filter').value='2026-09-22';renderAux()}
 if(b.id==='settings-theme')changeTheme();
 if(b.id==='settings-rtl')changeDirection();
 if(b.id==='reset-display'){$('.dashboard').classList.remove('dim-theme');$('.dashboard').dir='ltr';$('#theme-toggle').setAttribute('aria-pressed','false');$('#rtl-toggle').setAttribute('aria-pressed','false');changeFont(100);renderAux()}
});
document.addEventListener('change',e=>{const el=e.target;if(el.id==='analysis-match'){activeId=Number(el.value);teamSide='home';renderAux();updateStrip()}if(el.id==='standings-league')renderStandings(el.value);if(el.id==='round-select'){round=el.value;renderGroup()}if(el.id==='champ-date'){$('#date-filter').value=el.value;renderAux()}});
$('#match-search').addEventListener('input',renderMatches);$('#league-filter').addEventListener('change',renderMatches);$('#date-filter').addEventListener('change',renderMatches);$('#mobile-view').addEventListener('change',e=>switchView(e.target.value));
$('#filter-button').addEventListener('click',()=>{const open=$('#filter-button').getAttribute('aria-expanded')==='true';$('#filter-button').setAttribute('aria-expanded',String(!open));$('#filter-panel').hidden=open});$('#reset-filters').addEventListener('click',resetFilters);$('#empty-reset').addEventListener('click',resetFilters);
$('#selected-match-button').addEventListener('click',()=>openMatch(activeId));$('#next-match').addEventListener('click',()=>{activeId=(activeId+1)%games.length;renderMatches();if(!['matches','favorites'].includes(view))renderAux()});
$('#theme-toggle').addEventListener('click',changeTheme);$('#rtl-toggle').addEventListener('click',changeDirection);$('#font-size').addEventListener('input',e=>changeFont(e.target.value));document.addEventListener('input',e=>{if(e.target.id==='settings-font')changeFont(e.target.value)});
document.querySelector('.tabs').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const tabs=[...document.querySelectorAll('[data-tab]')];let i=tabs.indexOf(document.activeElement);i=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[i].focus();statusFilter=tabs[i].dataset.tab;updateStatusTabs();renderMatches()});
const menuButton=$('.menu-button');menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Open navigation':'Close navigation');$('.nav-links').classList.toggle('open',!open)});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');$('.nav-links').classList.remove('open')}));
const tourSteps=[{title:'Every fixture, in focus.',description:'Switch between live and finished demo fixtures. Search for a team, choose a league, and follow a match with the heart button.',visual:`${badge(0,'large')}<span style="font-size:25px">2 : 1</span>${badge(1,'large')}`},{title:'Go beyond the score.',description:'Open any match to explore goals, possession, team comparisons and player formations. Switch teams to see both sides of the pitch.',visual:`<span style="width:100%;max-width:300px">${chartArea()}</span>`},{title:'See the whole competition.',description:'Explore club form, league tables and championship groups from the sidebar. All results are simulated examples; no live data feed is connected.',visual:`<span class="brand-icon" style="width:80px;height:80px;font-size:45px">W</span>`}];
let tourStep=0;
function renderTour(){const s=tourSteps[tourStep];$('#tour-step-label').textContent=`THE WINMIX TOUR · 0${tourStep+1} / 03`;$('#tour-title').textContent=s.title;$('#tour-description').textContent=s.description;$('#tour-visual').innerHTML=s.visual;$('#tour-next').innerHTML=tourStep===2?'Explore the matches <span aria-hidden="true">↗</span>':'Next <span aria-hidden="true">→</span>';document.querySelectorAll('.tour-dots i').forEach((x,i)=>x.classList.toggle('active',i===tourStep))}
function openTour(){tourStep=0;renderTour();$('#tour-dialog').showModal()}
$('#tour-button').addEventListener('click',openTour);$('#tour-library-button').addEventListener('click',openTour);$('#tour-next').addEventListener('click',()=>{if(tourStep===2){$('#tour-dialog').close();resetFilters();$('#library').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});$('#tab-all').focus({preventScroll:true})}else{tourStep++;renderTour()}});
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.dialog-close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()})});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!document.querySelector('dialog[open]')){e.preventDefault();switchView('matches');$('#match-search').focus()}});
$('.activity-bars').innerHTML=Array.from({length:34},(_,i)=>`<i style="height:${8+Math.abs(Math.sin(i*1.7)*Math.cos(i*.37))*29}px"></i>`).join('');$('#feature-momentum').innerHTML=chartArea();
document.querySelector('.feature-card a').dataset.go='statistics';
fillIcons();renderMatches();
if(window.gsap&&window.ScrollTrigger&&!matchMedia('(prefers-reduced-motion: reduce)').matches){gsap.registerPlugin(ScrollTrigger);gsap.from('[data-word]',{yPercent:110,opacity:0,duration:1.1,stagger:.16,ease:'power3.out',delay:.2});gsap.from('[data-hero]',{y:14,opacity:0,duration:.9,stagger:.13,ease:'power2.out',delay:.15});gsap.from('.hero-monogram',{scale:.88,opacity:0,duration:1.3,ease:'power3.out'});gsap.from('.dashboard-shell',{y:38,opacity:0,duration:1.1,ease:'power3.out',delay:.65});gsap.to('[data-float]',{y:10,duration:4.5,repeat:-1,yoyo:true,stagger:1,ease:'sine.inOut'});gsap.from('.feature-card',{scrollTrigger:{trigger:'.feature-grid',start:'top 90%',once:true},y:25,opacity:0,duration:.7,stagger:.12,ease:'power2.out'})}

    
  </script>
</body>
</html>