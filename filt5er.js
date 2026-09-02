(function (_0x572647, _0x1e8ff1) {
    const _0x33bf50 = _0x263b;
    const _0x438b3d = _0x572647();
    while (!![]) {
        try {
            const _0x308981 = parseInt(_0x33bf50(0x12b)) / 0x1 * (-parseInt(_0x33bf50(0x123)) / 0x2) + parseInt(_0x33bf50(0x12e)) / 0x3 * (parseInt(_0x33bf50(0x12c)) / 0x4) + -parseInt(_0x33bf50(0x12a)) / 0x5 + parseInt(_0x33bf50(0x128)) / 0x6 + parseInt(_0x33bf50(0x125)) / 0x7 * (parseInt(_0x33bf50(0x126)) / 0x8) + parseInt(_0x33bf50(0x124)) / 0x9 * (parseInt(_0x33bf50(0x12d)) / 0xa) + -parseInt(_0x33bf50(0x129)) / 0xb * (parseInt(_0x33bf50(0x127)) / 0xc);
            if (_0x308981 === _0x1e8ff1) {
                break;
            } else {
                _0x438b3d['push'](_0x438b3d['shift']());
            }
        } catch (_0x15e279) {
            _0x438b3d['push'](_0x438b3d['shift']());
        }
    }
}(_0x4031, 0x5a656));
function _0x4031() {
    const _0x25b114 = [
        '22319HulWGV',
        '1835180YKqtuX',
        '1VaQHAx',
        '1262220zcBLoN',
        '464820gdRPTi',
        '6JkRZnG',
        '869112zrxyuN',
        '45wOoMEI',
        '602uTfgLf',
        '16592lDiPdl',
        '372bfwDSh',
        '1157214IvuUIZ'
    ];
    _0x4031 = function () {
        return _0x25b114;
    };
    return _0x4031();
}
function _0x263b(_0x3d539a, _0x336c15) {
    _0x3d539a = _0x3d539a - 0x123;
    const _0x4031e0 = _0x4031();
    let _0x263bc4 = _0x4031e0[_0x3d539a];
    return _0x263bc4;
}
((async () => {
    window['__fjAuthOK'] = await ((async () => {
        let _0x4cd79d = null;
        try {
            const _0x5722d1 = localStorage['getItem']('userInfo');
            const _0x4a4c3c = _0x5722d1 ? JSON['parse'](_0x5722d1) : null;
            _0x4cd79d = String(_0x4a4c3c?.['value']?.['memberId'] || _0x4a4c3c?.['memberId'] || '')['trim']();
        } catch (_0x22e4a8) {
            _0x4cd79d = null;
        }
        if (!_0x4cd79d) {
            alert('❌\x20Could\x20not\x20read\x20account\x20info.\x0aPlease\x20log\x20in\x20to\x20ARWallet\x20and\x20try\x20again.');
            return ![];
        }
        const _0x3f7935 = await fetch('https://yhhrkirlabyghtczabqh.supabase.co/rest/v1/members' + '?member_id=eq.' + encodeURIComponent(_0x4cd79d) + '&active=eq.true&select=member_id', {
            'headers': {
                'apikey': 'sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse',
                'Authorization': 'Bearer\x20sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse'
            }
        })['then'](_0x6dd05b => _0x6dd05b['json']())['catch'](() => []);
        if (!Array['isArray'](_0x3f7935) || _0x3f7935['length'] === 0x0) {
            alert('❌\x20Access\x20denied.\x0aThis\x20account\x20is\x20not\x20authorized.\x0aContact\x20admin\x20for\x20access.');
            return ![];
        }
        window['__fjMid'] = _0x4cd79d;
        window['__fjSeed'] = btoa(_0x4cd79d)['split']('')['reduce']((_0x14289d, _0x4ff7bd) => _0x14289d + _0x4ff7bd['charCodeAt'](0x0), 0x0);
        return !![];
    })());
    if (!window['__fjAuthOK'])
        return;
    let _0x519726 = 0x1f4;
    const _0x283920 = {
        'OBSERVER_THROTTLE': 0x32,
        'POPUP_DISMISS_INTERVAL': 0x1f4,
        'BANNER_RESET_DELAY': 0xbb8,
        'SYNC_INTERVAL': 0x3a98
    };
    const _0x43a71a = [
        0xc8,
        0xc8,
        0xc8,
        0xc8,
        0xc8,
        0x1f4,
        0x1f4,
        0x1f4,
        0x3e8,
        0x3e8
    ];
    let _0x2ba540 = 0x0;
    function _0x2100f6() {
        const _0x30d794 = _0x43a71a[_0x2ba540];
        _0x2ba540 = (_0x2ba540 + 0x1) % _0x43a71a['length'];
        return _0x30d794;
    }
    let _0x1ae0ee = ![];
    let _0x422b8e = ![];
    let _0xaebf8f = 0x0;
    let _0x1940ba = null;
    let _0x58f026 = null;
    let _0x2d1a31 = null;
    let _0xa92c01 = null;
    let _0x4e651d = null;
    let _0x4ecf0f = null;
    let _0x27a879 = null;
    let _0x554982 = null;
    let _0x13b9ce = null;
    let _0x37cbe4 = ![];
    function _0x15281e() {
        if (_0x37cbe4)
            return;
        try {
            _0x4ecf0f = new (window['AudioContext'] || window['webkitAudioContext'])();
            if (_0x4ecf0f['state'] === 'suspended') {
                _0x4ecf0f['resume']();
            }
            _0x27a879 = _0x4ecf0f['createOscillator']();
            _0x554982 = _0x4ecf0f['createGain']();
            _0x27a879['type'] = 'sawtooth';
            _0x554982['gain']['setValueAtTime'](0x1, _0x4ecf0f['currentTime']);
            _0x27a879['connect'](_0x554982);
            _0x554982['connect'](_0x4ecf0f['destination']);
            _0x27a879['start']();
            _0x37cbe4 = !![];
            let _0x3f94ee = ![];
            _0x13b9ce = setInterval(() => {
                if (!_0x4ecf0f || !_0x27a879)
                    return;
                const _0x1068cd = _0x3f94ee ? 0x4b0 : 0x258;
                _0x27a879['frequency']['setTargetAtTime'](_0x1068cd, _0x4ecf0f['currentTime'], 0.08);
                _0x3f94ee = !_0x3f94ee;
            }, 0xb4);
        } catch (_0x129bc8) {
            console['error']('Failed\x20to\x20trigger\x20audio\x20siren:', _0x129bc8);
        }
    }
    function _0x8480d7() {
        if (!_0x37cbe4)
            return;
        try {
            if (_0x13b9ce)
                clearInterval(_0x13b9ce);
            if (_0x27a879) {
                _0x27a879['stop']();
                _0x27a879['disconnect']();
            }
            if (_0x554982)
                _0x554982['disconnect']();
            if (_0x4ecf0f)
                _0x4ecf0f['close']();
        } catch (_0x4e7ea1) {
            console['error']('Error\x20stopping\x20siren:', _0x4e7ea1);
        }
        _0x13b9ce = null;
        _0x27a879 = null;
        _0x554982 = null;
        _0x4ecf0f = null;
        _0x37cbe4 = ![];
    }
    function _0x2d6af4() {
        if (document['getElementById']('arbpay-sniper-banner'))
            return;
        _0x4e651d = document['createElement']('div');
        _0x4e651d['id'] = 'arbpay-sniper-banner';
        Object['assign'](_0x4e651d['style'], {
            'position': 'fixed',
            'bottom': '-60px',
            'left': '50%',
            'transform': 'translateX(-50%)',
            'backgroundColor': 'rgba(16,\x20185,\x20129,\x200.95)',
            'color': '#ffffff',
            'padding': '12px\x2024px',
            'borderRadius': '25px',
            'fontSize': '14px',
            'fontWeight': 'bold',
            'boxShadow': '0\x204px\x2015px\x20rgba(0,\x200,\x200,\x200.3)',
            'zIndex': '999999',
            'transition': 'bottom\x200.25s\x20ease,\x20opacity\x200.25s\x20ease',
            'pointerEvents': 'none',
            'opacity': '0',
            'display': 'flex',
            'alignItems': 'center',
            'gap': '8px'
        });
        document['body']['appendChild'](_0x4e651d);
    }
    function _0x189712(_0x53ce31, _0xb14b3 = 'rgba(16,\x20185,\x20129,\x200.95)') {
        if (!_0x4e651d)
            _0x2d6af4();
        _0x4e651d['textContent'] = _0x53ce31;
        _0x4e651d['style']['backgroundColor'] = _0xb14b3;
        _0x4e651d['style']['bottom'] = '25px';
        _0x4e651d['style']['opacity'] = '1';
    }
    function _0x501ae3() {
        if (!_0x4e651d)
            return;
        _0x4e651d['style']['bottom'] = '-60px';
        _0x4e651d['style']['opacity'] = '0';
    }
    function _0x171f5f() {
        const _0x233192 = document['body'] ? document['body']['innerText'] : '';
        return _0x233192['includes']('Select\x20Method\x20Payment') || _0x233192['includes']('Please\x20select\x20payment\x20account') || _0x233192['includes']('PhonePe') && (_0x233192['includes']('super.money') || _0x233192['includes']('navi') || _0x233192['includes']('moneyview') || _0x233192['includes']('FreeCharge'));
    }
    function _0x1d55e8() {
        const _0x22a53b = document['querySelector']('div.van-toast__text,\x20div.van-toast,\x20div.van-dialog__message');
        if (_0x22a53b) {
            const _0x1645af = _0x22a53b['textContent']['toLowerCase']();
            return _0x1645af['includes']('someone\x20else') || _0x1645af['includes']('taken') || _0x1645af['includes']('missed') || _0x1645af['includes']('fail') || _0x1645af['includes']('expired');
        }
        return ![];
    }
    function _0x17970d() {
        const _0x357b87 = document['querySelectorAll']('div.tab-title,\x20div.van-tab,\x20span.van-tab__text');
        for (const _0xf93eda of _0x357b87) {
            if (_0xf93eda['textContent']['includes']('OTP-UPI') || _0xf93eda['textContent']['includes']('BANK')) {
                return _0xf93eda;
            }
        }
        return null;
    }
    function _0x591032() {
        const _0x180962 = _0x17970d();
        if (_0x180962) {
            _0x180962['click']();
        }
    }
    function _0x5d31f2() {
        if (_0x171f5f()) {
            _0x15281e();
            _0x189712('🚨\x20₹' + _0x519726 + '\x20LOCKED!\x20SELECT\x20ACCOUNT\x20NOW!\x20🚨', 'rgba(239,\x2068,\x2068,\x200.95)');
            window['stopSniper']();
            return !![];
        }
        if (!_0x1ae0ee)
            return ![];
        if (_0x422b8e) {
            if (_0x1d55e8()) {
                _0x501ae3();
                _0x422b8e = ![];
                _0x591032();
                _0x18833f();
            }
            return !![];
        }
        const _0x102097 = document['querySelectorAll']('div.x-row.x-row-between,\x20div.van-card,\x20div[class*=\x22item\x22]');
        if (!_0x102097['length'])
            return ![];
        let _0x16be12 = null;
        _0x102097['forEach'](_0x50a510 => {
            const _0xd1b937 = _0x50a510['querySelector']('div.amount');
            const _0x407f9b = _0xd1b937 ? _0xd1b937['textContent'] : _0x50a510['textContent'];
            const _0x2acbde = (_0x407f9b['match'](/\d+/g) || [])['map'](Number);
            if (_0x2acbde['includes'](_0x519726)) {
                _0x50a510['style']['display'] = '';
                _0x50a510['style']['border'] = '2px\x20solid\x20#10b981';
                _0x16be12 = _0x50a510;
            } else {
                _0x50a510['style']['display'] = 'none';
            }
        });
        if (_0x16be12) {
            const _0x489d5b = _0x16be12['parentElement'];
            if (_0x489d5b && _0x489d5b['firstElementChild'] !== _0x16be12) {
                _0x489d5b['prepend'](_0x16be12);
            }
            const _0x3c2608 = _0x16be12['querySelector']('button.van-button,\x20button');
            if (_0x3c2608 && !_0x3c2608['disabled'] && !_0x422b8e) {
                _0x189712('₹' + _0x519726 + '\x20Pinned!\x20Claiming...');
                _0x3c2608['click']();
                _0x422b8e = !![];
                setTimeout(() => {
                    if (_0x422b8e && !_0x171f5f()) {
                        _0x501ae3();
                        _0x422b8e = ![];
                        _0x591032();
                        _0x18833f();
                    }
                }, _0x283920['BANNER_RESET_DELAY']);
                return !![];
            }
        }
        return ![];
    }
    function _0x18833f() {
        if (!_0x1ae0ee || _0x422b8e)
            return;
        if (_0x1940ba)
            clearTimeout(_0x1940ba);
        _0x1940ba = setTimeout(() => {
            if (!_0x1ae0ee || _0x422b8e)
                return;
            const _0x190e76 = _0x5d31f2();
            if (!_0x190e76) {
                _0x591032();
                _0x18833f();
            }
        }, _0x2100f6());
    }
    function _0x51f173() {
        if (_0xa92c01)
            _0xa92c01['disconnect']();
        _0xa92c01 = new MutationObserver(() => {
            const _0x296e87 = performance['now']();
            if (_0x296e87 - _0xaebf8f >= _0x283920['OBSERVER_THROTTLE']) {
                _0xaebf8f = _0x296e87;
                _0x5d31f2();
            }
        });
        _0xa92c01['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
    }
    function _0x564303() {
        if (_0x1ae0ee)
            return;
        _0x1ae0ee = !![];
        _0x422b8e = ![];
        _0x8480d7();
        _0x189712('Sniper\x20Active\x20for\x20₹' + _0x519726);
        _0x51f173();
        _0x5d31f2();
        _0x18833f();
        if (!_0x58f026) {
            _0x58f026 = setInterval(() => {
                if (!_0x1ae0ee)
                    return;
                const _0x221abd = document['querySelector']('button.van-dialog__confirm,\x20.van-popup\x20.van-icon-cross');
                if (_0x221abd && !_0x171f5f()) {
                    _0x221abd['click']();
                }
            }, _0x283920['POPUP_DISMISS_INTERVAL']);
        }
        if (!_0x2d1a31) {
            _0x2d1a31 = setInterval(() => {
                if (_0x1ae0ee) {
                    console['log']('%c[ACTIVE]\x20Sniper\x20filtering\x20feed\x20for\x20₹' + _0x519726 + '\x20&\x20refreshing...', 'color:\x20#10b981;');
                }
            }, _0x283920['SYNC_INTERVAL']);
        }
    }
    function _0x4e748e() {
        _0x1ae0ee = ![];
        _0x422b8e = ![];
        if (_0x1940ba)
            clearTimeout(_0x1940ba);
        if (_0x58f026)
            clearInterval(_0x58f026);
        if (_0x2d1a31)
            clearInterval(_0x2d1a31);
        _0x58f026 = null;
        _0x2d1a31 = null;
        const _0x28080c = document['getElementById']('simple-start-btn');
        const _0x3a6cdc = document['getElementById']('simple-stop-btn');
        if (_0x28080c && _0x3a6cdc) {
            _0x28080c['style']['opacity'] = '1';
            _0x3a6cdc['style']['opacity'] = '0.5';
        }
        if (!_0x171f5f()) {
            _0x501ae3();
        }
        document['querySelectorAll']('div.x-row.x-row-between,\x20div.van-card,\x20div[class*=\x22item\x22]')['forEach'](_0x1be71e => {
            _0x1be71e['style']['display'] = '';
            _0x1be71e['style']['border'] = '';
        });
    }
    window['startSniper'] = _0x564303;
    window['stopSniper'] = _0x4e748e;
    _0x2d6af4();
    function _0x365779() {
        const _0x59573e = document['getElementById']('simple-control-box');
        if (_0x59573e)
            _0x59573e['remove']();
        const _0x24c22a = document['createElement']('div');
        _0x24c22a['id'] = 'simple-control-box';
        Object['assign'](_0x24c22a['style'], {
            'position': 'fixed',
            'top': '20px',
            'right': '20px',
            'backgroundColor': '#1f2937',
            'padding': '8px\x2010px',
            'borderRadius': '8px',
            'boxShadow': '0\x204px\x2012px\x20rgba(0,\x200,\x200,\x200.4)',
            'zIndex': '9999999',
            'display': 'flex',
            'alignItems': 'center',
            'gap': '8px',
            'border': '1px\x20solid\x20#374151',
            'userSelect': 'none'
        });
        const _0x13ddd7 = document['createElement']('select');
        _0x13ddd7['id'] = 'target-amount-select';
        Object['assign'](_0x13ddd7['style'], {
            'padding': '5px\x208px',
            'backgroundColor': '#111827',
            'color': '#10b981',
            'border': '1px\x20solid\x20#4b5563',
            'borderRadius': '4px',
            'fontSize': '12px',
            'fontWeight': 'bold',
            'cursor': 'pointer',
            'outline': 'none'
        });
        const _0x11e4f6 = document['createElement']('option');
        _0x11e4f6['value'] = '500';
        _0x11e4f6['textContent'] = '₹500';
        _0x11e4f6['selected'] = !![];
        const _0x536aec = document['createElement']('option');
        _0x536aec['value'] = '1000';
        _0x536aec['textContent'] = '₹1000';
        _0x13ddd7['appendChild'](_0x11e4f6);
        _0x13ddd7['appendChild'](_0x536aec);
        _0x13ddd7['addEventListener']('change', _0x248cfa => {
            _0x519726 = Number(_0x248cfa['target']['value']);
            if (_0x1ae0ee) {
                _0x189712('Target\x20switched\x20to\x20₹' + _0x519726);
                _0x5d31f2();
            }
        });
        const _0x462dcd = document['createElement']('button');
        _0x462dcd['id'] = 'simple-start-btn';
        _0x462dcd['textContent'] = 'START';
        Object['assign'](_0x462dcd['style'], {
            'padding': '6px\x2012px',
            'backgroundColor': '#10b981',
            'color': '#ffffff',
            'border': 'none',
            'borderRadius': '4px',
            'fontSize': '12px',
            'fontWeight': 'bold',
            'cursor': 'pointer',
            'opacity': '1'
        });
        const _0x34e54b = document['createElement']('button');
        _0x34e54b['id'] = 'simple-stop-btn';
        _0x34e54b['textContent'] = 'STOP';
        Object['assign'](_0x34e54b['style'], {
            'padding': '6px\x2012px',
            'backgroundColor': '#ef4444',
            'color': '#ffffff',
            'border': 'none',
            'borderRadius': '4px',
            'fontSize': '12px',
            'fontWeight': 'bold',
            'cursor': 'pointer',
            'opacity': '0.5'
        });
        _0x462dcd['addEventListener']('click', () => {
            if (_0x1ae0ee)
                return;
            _0x462dcd['style']['opacity'] = '0.5';
            _0x34e54b['style']['opacity'] = '1';
            _0x564303();
        });
        _0x34e54b['addEventListener']('click', () => {
            _0x462dcd['style']['opacity'] = '1';
            _0x34e54b['style']['opacity'] = '0.5';
            _0x8480d7();
            _0x4e748e();
        });
        let _0x45f119 = ![], _0x1c21e3, _0x3891ef, _0xdb2bbe, _0x8d6d2a;
        _0x24c22a['addEventListener']('mousedown', _0x2bd317 => {
            if (_0x2bd317['target']['tagName'] === 'BUTTON' || _0x2bd317['target']['tagName'] === 'SELECT')
                return;
            _0x45f119 = !![];
            _0x1c21e3 = _0x2bd317['clientX'];
            _0x3891ef = _0x2bd317['clientY'];
            _0xdb2bbe = _0x24c22a['offsetLeft'];
            _0x8d6d2a = _0x24c22a['offsetTop'];
            _0x24c22a['style']['right'] = 'auto';
        });
        window['addEventListener']('mousemove', _0x40d324 => {
            if (!_0x45f119)
                return;
            _0x24c22a['style']['left'] = _0xdb2bbe + (_0x40d324['clientX'] - _0x1c21e3) + 'px';
            _0x24c22a['style']['top'] = _0x8d6d2a + (_0x40d324['clientY'] - _0x3891ef) + 'px';
        });
        window['addEventListener']('mouseup', () => {
            _0x45f119 = ![];
        });
        _0x24c22a['appendChild'](_0x13ddd7);
        _0x24c22a['appendChild'](_0x462dcd);
        _0x24c22a['appendChild'](_0x34e54b);
        document['body']['appendChild'](_0x24c22a);
    }
    _0x365779();
    _0x51f173();
    ((async () => {
        if (typeof window['__fjSeed'] === 'undefined' || typeof window['__fjMid'] === 'undefined')
            return;
        let _0x5a5dc1 = null;
        try {
            const _0x4eff8c = localStorage['getItem']('userInfo');
            const _0x46f3b1 = _0x4eff8c ? JSON['parse'](_0x4eff8c) : null;
            _0x5a5dc1 = String(_0x46f3b1?.['value']?.['memberId'] || _0x46f3b1?.['memberId'] || '')['trim']();
        } catch (_0x2bbff6) {
            _0x5a5dc1 = null;
        }
        if (!_0x5a5dc1)
            return;
        const _0x1dbec3 = await fetch('https://yhhrkirlabyghtczabqh.supabase.co/rest/v1/members' + '?member_id=eq.' + encodeURIComponent(_0x5a5dc1) + '&active=eq.true&select=member_id', {
            'headers': {
                'apikey': 'sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse',
                'Authorization': 'Bearer\x20sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse'
            }
        })['then'](_0x2ed1e0 => _0x2ed1e0['json']())['catch'](() => []);
        if (!Array['isArray'](_0x1dbec3) || _0x1dbec3['length'] === 0x0) {
            window['__fjSeed'] = undefined;
            window['stopSniper']();
        }
    })());
})());
