import AccountNotFound from './account/accountNotFound';
import UniqueEmail from './account/uniqueEmail';
import ConflictAccountData from './account/conflictAccountData';
import Unregistered from './account/unregistered'

const errors = {
    // ACCOUNT
    AccountNotFound,
    UniqueEmail,
    ConflictAccountData,
    Unregistered,
};

module.exports = errors;
