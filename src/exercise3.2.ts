// 3

type UserRole = 'admin' | 'editor' | 'viewer';

function getRoleMessages(role: UserRole): string {
    switch (role) {
        case 'admin':
            return 'You have entered as admin.';
        case 'editor':
            return 'You have entered as editor.';
        case 'viewer':
            return 'You have entered as viewer.';
        default:
            // In TypeScript, this case should not happen due to type checking
            return 'No such role.';
    }
}

console.log(getRoleMessages('admin'));
console.log(getRoleMessages('editor'));
console.log(getRoleMessages('viewer'));

