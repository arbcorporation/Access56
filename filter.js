(function (_0x2ace4, _0x197d16) {
    const _0x57112c = _0x11ba;
    const _0x3c580b = _0x2ace4();
    while (!![]) {
        try {
            const _0x25459b = parseInt(_0x57112c(0xd2)) / 0x1 + -parseInt(_0x57112c(0xd3)) / 0x2 * (parseInt(_0x57112c(0xd4)) / 0x3) + parseInt(_0x57112c(0xce)) / 0x4 * (parseInt(_0x57112c(0xcf)) / 0x5) + parseInt(_0x57112c(0xd1)) / 0x6 + -parseInt(_0x57112c(0xcd)) / 0x7 * (parseInt(_0x57112c(0xd0)) / 0x8) + -parseInt(_0x57112c(0xd5)) / 0x9 + -parseInt(_0x57112c(0xd6)) / 0xa;
            if (_0x25459b === _0x197d16) {
                break;
            } else {
                _0x3c580b['push'](_0x3c580b['shift']());
            }
        } catch (_0x5a0a5a) {
            _0x3c580b['push'](_0x3c580b['shift']());
        }
    }
}(_0x5705, 0xad348));
((async () => {
    window['__fjAuthOK'] = await ((async () => {
        let _0x125bf4 = null;
        try {
            const _0x10cd31 = localStorage['getItem']('userInfo');
            const _0x1cadc1 = _0x10cd31 ? JSON['parse'](_0x10cd31) : null;
            _0x125bf4 = String(_0x1cadc1?.['value']?.['memberId'] || _0x1cadc1?.['memberId'] || '')['trim']();
        } catch (_0x192fba) {
            _0x125bf4 = null;
        }
        if (!_0x125bf4) {
            alert('❌\x20Could\x20not\x20read\x20account\x20info.\x0aPlease\x20log\x20in\x20to\x20ARWallet\x20and\x20try\x20again.');
            return ![];
        }
        const _0x3c3564 = await fetch('https://yhhrkirlabyghtczabqh.supabase.co/rest/v1/members' + '?member_id=eq.' + encodeURIComponent(_0x125bf4) + '&active=eq.true&select=member_id', {
            'headers': {
                'apikey': 'sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse',
                'Authorization': 'Bearer\x20sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse'
            }
        })['then'](_0x3ada8f => _0x3ada8f['json']())['catch'](() => []);
        if (!Array['isArray'](_0x3c3564) || _0x3c3564['length'] === 0x0) {
            alert('❌\x20Access\x20denied.\x0aThis\x20account\x20is\x20not\x20authorized.\x0aContact\x20admin\x20for\x20access.');
            return ![];
        }
        window['__fjMid'] = _0x125bf4;
        window['__fjSeed'] = btoa(_0x125bf4)['split']('')['reduce']((_0x5f594b, _0x4f53a6) => _0x5f594b + _0x4f53a6['charCodeAt'](0x0), 0x0);
        return !![];
    })());
    if (!window['__fjAuthOK'])
        return;
    let _0x2ee4b7 = 0x1f4;
    const _0x9e374a = {
        'OBSERVER_THROTTLE': 0x32,
        'POPUP_DISMISS_INTERVAL': 0x1f4,
        'BANNER_RESET_DELAY': 0xbb8,
        'SYNC_INTERVAL': 0x3a98
    };
    const _0x13d11e = [
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
    let _0x437e02 = 0x0;
    function _0x1613b8() {
        const _0x5cfb77 = _0x13d11e[_0x437e02];
        _0x437e02 = (_0x437e02 + 0x1) % _0x13d11e['length'];
        return _0x5cfb77;
    }
    let _0x3ac11e = ![];
    let _0x18e7af = ![];
    let _0x14ca15 = 0x0;
    let _0x1bf781 = null;
    let _0x20e1aa = null;
    let _0x2657f7 = null;
    let _0x50dedc = null;
    let _0x2b04a8 = null;
    let _0x594a7f = null;
    let _0x37a402 = null;
    let _0x3ee095 = null;
    let _0x12b581 = null;
    let _0x256fe3 = ![];
    function _0x6dae52() {
        if (_0x256fe3)
            return;
        try {
            _0x594a7f = new (window['AudioContext'] || window['webkitAudioContext'])();
            if (_0x594a7f['state'] === 'suspended') {
                _0x594a7f['resume']();
            }
            _0x37a402 = _0x594a7f['createOscillator']();
            _0x3ee095 = _0x594a7f['createGain']();
            _0x37a402['type'] = 'sawtooth';
            _0x3ee095['gain']['setValueAtTime'](0x1, _0x594a7f['currentTime']);
            _0x37a402['connect'](_0x3ee095);
            _0x3ee095['connect'](_0x594a7f['destination']);
            _0x37a402['start']();
            _0x256fe3 = !![];
            let _0x475396 = ![];
            _0x12b581 = setInterval(() => {
                if (!_0x594a7f || !_0x37a402)
                    return;
                const _0x1f2534 = _0x475396 ? 0x4b0 : 0x258;
                _0x37a402['frequency']['setTargetAtTime'](_0x1f2534, _0x594a7f['currentTime'], 0.08);
                _0x475396 = !_0x475396;
            }, 0xb4);
        } catch (_0xe71476) {
            console['error']('Failed\x20to\x20trigger\x20audio\x20siren:', _0xe71476);
        }
    }
    function _0x6c061d() {
        if (!_0x256fe3)
            return;
        try {
            if (_0x12b581)
                clearInterval(_0x12b581);
            if (_0x37a402) {
                _0x37a402['stop']();
                _0x37a402['disconnect']();
            }
            if (_0x3ee095)
                _0x3ee095['disconnect']();
            if (_0x594a7f)
                _0x594a7f['close']();
        } catch (_0x248498) {
            console['error']('Error\x20stopping\x20siren:', _0x248498);
        }
        _0x12b581 = null;
        _0x37a402 = null;
        _0x3ee095 = null;
        _0x594a7f = null;
        _0x256fe3 = ![];
    }
    function _0x259e47() {
        if (document['getElementById']('arbpay-sniper-banner'))
            return;
        _0x2b04a8 = document['createElement']('div');
        _0x2b04a8['id'] = 'arbpay-sniper-banner';
        Object['assign'](_0x2b04a8['style'], {
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
        document['body']['appendChild'](_0x2b04a8);
    }
    function _0x5ca97b(_0x6db9ae, _0x3a669c = 'rgba(16,\x20185,\x20129,\x200.95)') {
        if (!_0x2b04a8)
            _0x259e47();
        _0x2b04a8['textContent'] = _0x6db9ae;
        _0x2b04a8['style']['backgroundColor'] = _0x3a669c;
        _0x2b04a8['style']['bottom'] = '25px';
        _0x2b04a8['style']['opacity'] = '1';
    }
    function _0x311138() {
        if (!_0x2b04a8)
            return;
        _0x2b04a8['style']['bottom'] = '-60px';
        _0x2b04a8['style']['opacity'] = '0';
    }
    function _0x4810a5() {
        const _0x920217 = document['body'] ? document['body']['innerText'] : '';
        return _0x920217['includes']('Select\x20Method\x20Payment') || _0x920217['includes']('Please\x20select\x20payment\x20account') || _0x920217['includes']('PhonePe') && (_0x920217['includes']('super.money') || _0x920217['includes']('navi') || _0x920217['includes']('moneyview') || _0x920217['includes']('FreeCharge'));
    }
    function _0x40aa3e() {
        const _0x518932 = document['querySelector']('div.van-toast__text,\x20div.van-toast,\x20div.van-dialog__message');
        if (_0x518932) {
            const _0x57b3c2 = _0x518932['textContent']['toLowerCase']();
            return _0x57b3c2['includes']('someone\x20else') || _0x57b3c2['includes']('taken') || _0x57b3c2['includes']('missed') || _0x57b3c2['includes']('fail') || _0x57b3c2['includes']('expired');
        }
        return ![];
    }
    function _0x48e055() {
        const _0x31adc6 = document['querySelectorAll']('div.tab-title,\x20div.van-tab,\x20span.van-tab__text');
        for (const _0x5f57cb of _0x31adc6) {
            if (_0x5f57cb['textContent']['includes']('OTP-UPI') || _0x5f57cb['textContent']['includes']('BANK')) {
                return _0x5f57cb;
            }
        }
        return null;
    }
    function _0xa7b80a() {
        const _0x1f5f71 = _0x48e055();
        if (_0x1f5f71) {
            _0x1f5f71['click']();
        }
    }
    function _0x22328d() {
        if (_0x4810a5()) {
            _0x6dae52();
            _0x5ca97b('🚨\x20₹' + _0x2ee4b7 + '\x20LOCKED!\x20SELECT\x20ACCOUNT\x20NOW!\x20🚨', 'rgba(239,\x2068,\x2068,\x200.95)');
            window['stopSniper']();
            return !![];
        }
        if (!_0x3ac11e)
            return ![];
        if (_0x18e7af) {
            if (_0x40aa3e()) {
                _0x311138();
                _0x18e7af = ![];
                _0xa7b80a();
                _0x5a69f6();
            }
            return !![];
        }
        const _0x28985f = document['querySelectorAll']('div.x-row.x-row-between,\x20div.van-card,\x20div[class*=\x22item\x22]');
        if (!_0x28985f['length'])
            return ![];
        let _0x263466 = null;
        _0x28985f['forEach'](_0x303165 => {
            const _0x2f7383 = _0x303165['querySelector']('div.amount');
            const _0x296a92 = _0x2f7383 ? _0x2f7383['textContent'] : _0x303165['textContent'];
            const _0x2e4785 = (_0x296a92['match'](/\d+/g) || [])['map'](Number);
            if (_0x2e4785['includes'](_0x2ee4b7)) {
                _0x303165['style']['display'] = '';
                _0x303165['style']['border'] = '2px\x20solid\x20#10b981';
                _0x263466 = _0x303165;
            } else {
                _0x303165['style']['display'] = 'none';
            }
        });
        if (_0x263466) {
            const _0x417818 = _0x263466['parentElement'];
            if (_0x417818 && _0x417818['firstElementChild'] !== _0x263466) {
                _0x417818['prepend'](_0x263466);
            }
            const _0x58a22f = _0x263466['querySelector']('button.van-button,\x20button');
            if (_0x58a22f && !_0x58a22f['disabled'] && !_0x18e7af) {
                _0x5ca97b('₹' + _0x2ee4b7 + '\x20Pinned!\x20Claiming...');
                _0x58a22f['click']();
                _0x18e7af = !![];
                setTimeout(() => {
                    if (_0x18e7af && !_0x4810a5()) {
                        _0x311138();
                        _0x18e7af = ![];
                        _0xa7b80a();
                        _0x5a69f6();
                    }
                }, _0x9e374a['BANNER_RESET_DELAY']);
                return !![];
            }
        }
        return ![];
    }
    function _0x5a69f6() {
        if (!_0x3ac11e || _0x18e7af)
            return;
        if (_0x1bf781)
            clearTimeout(_0x1bf781);
        _0x1bf781 = setTimeout(() => {
            if (!_0x3ac11e || _0x18e7af)
                return;
            const _0x5051e5 = _0x22328d();
            if (!_0x5051e5) {
                _0xa7b80a();
                _0x5a69f6();
            }
        }, _0x1613b8());
    }
    function _0x26673a() {
        if (_0x50dedc)
            _0x50dedc['disconnect']();
        _0x50dedc = new MutationObserver(() => {
            const _0x2580a2 = performance['now']();
            if (_0x2580a2 - _0x14ca15 >= _0x9e374a['OBSERVER_THROTTLE']) {
                _0x14ca15 = _0x2580a2;
                _0x22328d();
            }
        });
        _0x50dedc['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
    }
    function _0x3bf50e() {
        if (_0x3ac11e)
            return;
        _0x3ac11e = !![];
        _0x18e7af = ![];
        _0x6c061d();
        _0x5ca97b('Sniper\x20Active\x20for\x20₹' + _0x2ee4b7);
        _0x26673a();
        _0x22328d();
        _0x5a69f6();
        if (!_0x20e1aa) {
            _0x20e1aa = setInterval(() => {
                if (!_0x3ac11e)
                    return;
                const _0x460958 = document['querySelector']('button.van-dialog__confirm,\x20.van-popup\x20.van-icon-cross');
                if (_0x460958 && !_0x4810a5()) {
                    _0x460958['click']();
                }
            }, _0x9e374a['POPUP_DISMISS_INTERVAL']);
        }
        if (!_0x2657f7) {
            _0x2657f7 = setInterval(() => {
                if (_0x3ac11e) {
                    console['log']('%c[ACTIVE]\x20Sniper\x20filtering\x20feed\x20for\x20₹' + _0x2ee4b7 + '\x20&\x20refreshing...', 'color:\x20#10b981;');
                }
            }, _0x9e374a['SYNC_INTERVAL']);
        }
    }
    function _0x31f0d0() {
        _0x3ac11e = ![];
        _0x18e7af = ![];
        if (_0x1bf781)
            clearTimeout(_0x1bf781);
        if (_0x20e1aa)
            clearInterval(_0x20e1aa);
        if (_0x2657f7)
            clearInterval(_0x2657f7);
        _0x20e1aa = null;
        _0x2657f7 = null;
        const _0x3baae2 = document['getElementById']('simple-start-btn');
        const _0x466e6e = document['getElementById']('simple-stop-btn');
        if (_0x3baae2 && _0x466e6e) {
            _0x3baae2['style']['opacity'] = '1';
            _0x466e6e['style']['opacity'] = '0.5';
        }
        if (!_0x4810a5()) {
            _0x311138();
        }
        document['querySelectorAll']('div.x-row.x-row-between,\x20div.van-card,\x20div[class*=\x22item\x22]')['forEach'](_0x2aca74 => {
            _0x2aca74['style']['display'] = '';
            _0x2aca74['style']['border'] = '';
        });
    }
    window['startSniper'] = _0x3bf50e;
    window['stopSniper'] = _0x31f0d0;
    _0x259e47();
    function _0x25f179() {
        const _0x57f99e = document['getElementById']('simple-control-box');
        if (_0x57f99e)
            _0x57f99e['remove']();
        const _0x20d95f = document['createElement']('div');
        _0x20d95f['id'] = 'simple-control-box';
        Object['assign'](_0x20d95f['style'], {
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
        const _0x4ac7ac = document['createElement']('select');
        _0x4ac7ac['id'] = 'target-amount-select';
        Object['assign'](_0x4ac7ac['style'], {
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
        const _0x3628a8 = document['createElement']('option');
        _0x3628a8['value'] = '500';
        _0x3628a8['textContent'] = '₹500';
        _0x3628a8['selected'] = !![];
        const _0x46a4e8 = document['createElement']('option');
        _0x46a4e8['value'] = '1000';
        _0x46a4e8['textContent'] = '₹1000';
        _0x4ac7ac['appendChild'](_0x3628a8);
        _0x4ac7ac['appendChild'](_0x46a4e8);
        _0x4ac7ac['addEventListener']('change', _0x5b457d => {
            _0x2ee4b7 = Number(_0x5b457d['target']['value']);
            if (_0x3ac11e) {
                _0x5ca97b('Target\x20switched\x20to\x20₹' + _0x2ee4b7);
                _0x22328d();
            }
        });
        const _0x4cecad = document['createElement']('button');
        _0x4cecad['id'] = 'simple-start-btn';
        _0x4cecad['textContent'] = 'START';
        Object['assign'](_0x4cecad['style'], {
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
        const _0xe47938 = document['createElement']('button');
        _0xe47938['id'] = 'simple-stop-btn';
        _0xe47938['textContent'] = 'STOP';
        Object['assign'](_0xe47938['style'], {
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
        _0x4cecad['addEventListener']('click', () => {
            if (_0x3ac11e)
                return;
            _0x4cecad['style']['opacity'] = '0.5';
            _0xe47938['style']['opacity'] = '1';
            _0x3bf50e();
        });
        _0xe47938['addEventListener']('click', () => {
            _0x4cecad['style']['opacity'] = '1';
            _0xe47938['style']['opacity'] = '0.5';
            _0x6c061d();
            _0x31f0d0();
        });
        let _0x1ca94d = ![], _0x2e74f4, _0x228f87, _0x10b1ef, _0x11eca6;
        _0x20d95f['addEventListener']('mousedown', _0x29dabf => {
            if (_0x29dabf['target']['tagName'] === 'BUTTON' || _0x29dabf['target']['tagName'] === 'SELECT')
                return;
            _0x1ca94d = !![];
            _0x2e74f4 = _0x29dabf['clientX'];
            _0x228f87 = _0x29dabf['clientY'];
            _0x10b1ef = _0x20d95f['offsetLeft'];
            _0x11eca6 = _0x20d95f['offsetTop'];
            _0x20d95f['style']['right'] = 'auto';
        });
        window['addEventListener']('mousemove', _0x529320 => {
            if (!_0x1ca94d)
                return;
            _0x20d95f['style']['left'] = _0x10b1ef + (_0x529320['clientX'] - _0x2e74f4) + 'px';
            _0x20d95f['style']['top'] = _0x11eca6 + (_0x529320['clientY'] - _0x228f87) + 'px';
        });
        window['addEventListener']('mouseup', () => {
            _0x1ca94d = ![];
        });
        _0x20d95f['appendChild'](_0x4ac7ac);
        _0x20d95f['appendChild'](_0x4cecad);
        _0x20d95f['appendChild'](_0xe47938);
        document['body']['appendChild'](_0x20d95f);
    }
    _0x25f179();
    _0x26673a();
    ((async () => {
        if (typeof window['__fjSeed'] === 'undefined' || typeof window['__fjMid'] === 'undefined')
            return;
        let _0x4a0681 = null;
        try {
            const _0x1159fe = localStorage['getItem']('userInfo');
            const _0x4b28b8 = _0x1159fe ? JSON['parse'](_0x1159fe) : null;
            _0x4a0681 = String(_0x4b28b8?.['value']?.['memberId'] || _0x4b28b8?.['memberId'] || '')['trim']();
        } catch (_0x10f518) {
            _0x4a0681 = null;
        }
        if (!_0x4a0681)
            return;
        const _0x8d814a = await fetch('https://yhhrkirlabyghtczabqh.supabase.co/rest/v1/members' + '?member_id=eq.' + encodeURIComponent(_0x4a0681) + '&active=eq.true&select=member_id', {
            'headers': {
                'apikey': 'sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse',
                'Authorization': 'Bearer\x20sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse'
            }
        })['then'](_0x2adee4 => _0x2adee4['json']())['catch'](() => []);
        if (!Array['isArray'](_0x8d814a) || _0x8d814a['length'] === 0x0) {
            window['__fjSeed'] = undefined;
            window['stopSniper']();
        }
    })());
})());
function _0x11ba(_0xaec77e, _0x3276eb) {
    _0xaec77e = _0xaec77e - 0xcd;
    const _0x5705a0 = _0x5705();
    let _0x11bacd = _0x5705a0[_0xaec77e];
    return _0x11bacd;
}
function _0x5705() {
    const _0x505166 = [
        '9072560UlLraE',
        '414519SaDbCP',
        '84YBDGQY',
        '298085MWwGOQ',
        '160jctkRx',
        '5325228fLayTC',
        '1302505FtBYGj',
        '46236koQjMi',
        '30CLCBJU',
        '3687984PklNTc'
    ];
    _0x5705 = function () {
        return _0x505166;
    };
    return _0x5705();
}
